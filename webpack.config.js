var webpack = require('webpack')

module.exports = {
  cache: true,
  entry: {
    main: __dirname + '/client/public/js/client.js'
  },
  output: {
    path: __dirname + '/client/dist',
    filename: '[name].js'
  },
  watch: true,
  keepalive: true,
  plugins: [
    new webpack.OldWatchingPlugin()
  ]
}
