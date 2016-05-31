
module.exports = {
  cache: true,
  entry: {
    main: __dirname + '/client/main.js'
  },
  output: {
    path: __dirname + '/client/dist',
    filename: '[name].js'
  },
  watch: true,
  keepalive: true
}
