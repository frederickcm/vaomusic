const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'public'),
  },
};
