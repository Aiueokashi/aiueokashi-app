const presets =  [
  ["@babel/preset-env", {
    "modules": false,
    "targets": [">0.25% in JP", "not ie <= 10", "not op_mini all"],
    "useBuiltIns": "usage",
  }]
];
module.exports = { presets }