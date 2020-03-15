const path = require('path');

module.exports = {
  mode: 'production', // enable many optimizations for production builds
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  target: 'node'
};
