/* Express App */
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import customLogger from '../utils/logger'
import http from 'http';
import path from 'path';
import fs from 'fs';
import ytdl from 'ytdl-core';
import { exec } from 'child_process';

/* My express App */
export default function expressApp(functionName) {
  const app = express()
  const router = express.Router()
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

// static以下に配置したファイルは直リンクで見れるようにする
  app.use(express.static(path.resolve(__dirname, 'static')));

// tmpディレクトリを作成する
fs.mkdir(path.resolve(__dirname, '../tmp/'), (err) => {
  if (err) {
    console.error(err);
  }
});
  // gzip responses
  router.use(compression())
  

  // Set router base path for local dev
  const routerBasePath = process.env.NODE_ENV === 'development' ? `/${functionName}` : `/.netlify/functions/${functionName}/`

  /* define routes */
  router.get('/', (req, res) => {
    const html = `
    <html>
      <head>
        <style>
          body {
            padding: 30px;
          }
        </style>
      </head>
      <body>
        <h1>Express via '${functionName}' ⊂◉‿◉つ</h1>

        <p>I'm using Express running via a <a href='https://www.netlify.com/docs/functions/' target='_blank'>Netlify Function</a>.</p>

        <p>Choose a route:</p>

        <div>
          <a href='/.netlify/functions/${functionName}/users'>View /users route</a>
        </div>

        <div>
          <a href='/.netlify/functions/${functionName}/hello'>View /hello route</a>
        </div>

        <br/>
        <br/>

        <div>
          <a href='/'>
            Go back to demo homepage
          </a>
        </div>

        <br/>
        <br/>

        <div>
          <a href='https://github.com/DavidWells/netlify-functions-express' target='_blank'>
            See the source code on github
          </a>
        </div>
      </body>
    </html>
  `
    res.send(html)
  })

  router.get('/users', (req, res) => {
    res.json({
      users: [
        {
          name: 'steve',
        },
        {
          name: 'joe',
        },
      ],
    })
  })
  
  router.get('/api/youtube/:youtubeId', (req, res) => {
  const { youtubeId } = req.params;
  const fileType = (req.query.fileType || 'mp4');

  const destFilePath = path.resolve(__dirname, `../tmp/${youtubeId}.mp4`);

  const url = `https://www.youtube.com/watch?v=${youtubeId}`;
  const stream = ytdl(url,{filter: (format) => format.container === 'mp4', highWaterMark: 32 * 1024 * 1024});

  stream.pipe(fs.createWriteStream(destFilePath));

  stream.on('error', (err) => {
    console.error(err);
    res.status(400).send('download error!');
  });

  stream.on('end', () => {
    console.log(`youtube file (${youtubeId}.mp4) downloaded.`);

    // mp4の場合はそのまま返す
    if (fileType === 'mp4') {
      res.download(destFilePath);
      return;
    }

    // mp3の場合は変換してから返す
    console.log('transform mp4 -> mp3.');
    const mp3FilePath = path.resolve(__dirname, `../tmp/${youtubeId}.mp3`);
    exec(`ffmpeg -y -i ${destFilePath} ${mp3FilePath}`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        res.status(500).send('movie translation error!');
        return;
      }
      console.log(stdout);
      console.log(stderr);
      res.download(mp3FilePath);
    });
  });
});
  
router.get('/api/test/:youtubeID', (req, res) => {
  const { youtubeID } = req.params;
  const ytdlOptions = {};
  ytdlOptions.quality = "highest"
  let url = `https://www.youtube.com/watch?v=${youtubeID}`
  ytdl.getInfo(url).then((info) => {
      res.send(ytdl.chooseFormat(info.formats, ytdlOptions).url);
    return;
  })
});

  router.get('/hello/', function(req, res) {
    res.send('hello world')
  })

  // Attach logger
  app.use(morgan(customLogger))

  // Setup routes
  app.use(routerBasePath, router)

  // Apply express middlewares
  router.use(cors())
  router.use(bodyParser.json())
  router.use(bodyParser.urlencoded({ extended: true }))

  return app
}
