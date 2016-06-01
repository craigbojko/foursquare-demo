module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt)
  // load all grunt tasks
  // require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    standard: {
      extension: {
        options: {
          format: true
        },
        src: [
          'src/**/*.js'
        ]
      }
    },
    concurrent: {
      dev: ['nodemon', 'webpack'],
      options: {
        logConcurrentOutput: true
      }
    },
    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          // nodeArgs: ['--debug'],
          watch: ['**.js'],
          legacyWatch: true,
          env: {
            PORT: '5000'
          },
          restartable: "rst",
          ignore: [
            ".git",
            "node_modules/**"
          ],
          verbose: true,
          events: {
            "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
          },
          env: {
            "NODE_ENV": "development"
          }
        }
      }
    },
    webpack: {
      dev: require('./webpack.config.js')
    }
  })

  grunt.loadNpmTasks('grunt-nodemon')
  grunt.loadNpmTasks('grunt-concurrent')
  grunt.loadNpmTasks('grunt-webpack')
  grunt.loadNpmTasks('grunt-standard')
  
  grunt.registerTask('lint', ['standard'])
  grunt.registerTask('build', ['webpack'])
  grunt.registerTask('run', ['concurrent:dev'])
}
