const path = require('path');

// const entry = {};
const entry = './src/js/index.ts'
const plugins = []

const config = {
  entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: './',
  },
  module: {

  },
  plugins,
};

module.exports = config;
