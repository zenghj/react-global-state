const babel = require('rollup-plugin-babel')
const {uglify} = require('rollup-plugin-uglify')

module.exports = {
  entry: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'cjs'
  },
  external: ['react'],
  plugins: [
    babel({
      exclude: 'node_modules',
      presets: [
        ['es2015', { modules: false }],
        'stage-1',
        'react',
      ],
      // plugins: ['external-helpers'],
    }),
    uglify(),
  ]
}
