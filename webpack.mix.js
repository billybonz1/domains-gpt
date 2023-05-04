const mix = require('laravel-mix')
const path = require('path')
require('vuetifyjs-mix-extension')
const webpack = require('webpack')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
  resolve: {
    alias: {
      '@resources': path.resolve(__dirname, 'resources/'),
      '@': path.resolve(__dirname, 'resources/js/src/'),
      'apexcharts': path.resolve(__dirname, 'node_modules/apexcharts-clevision'),
    }
  },
  plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
  output: {
    chunkFilename: 'js/chunks/[name].[chunkhash].js',
  },
  devServer: {
    allowedHosts: [],
    port: 4002,
    host: '0.0.0.0',
    public: 'http://46.175.147.182:4001',
    hot: true,
    proxy: {
            '*': {
                target: 'http://46.175.147.182:4001',
                secure: false
            }
        }
  }
})


mix
  .js('resources/js/app.js', 'public/js')
  .vuetify('vuetify-loader', './resources/sass/styles/variables.scss')
  .vue()
  .copyDirectory('resources/js/src/assets/images', 'public/images')
