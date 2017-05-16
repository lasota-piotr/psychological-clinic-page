const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProd = process.argv.indexOf('-p') !== -1; // true or false
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader']
  });

const cssConfig = isProd ? cssProd : cssDev;


module.exports = {
  entry: {
    app: './src/app.js',
    landing: './src/js/landing.js',
    specialists: './src/js/specialists.js',
    clinics: './src/js/clinics.js',
    contact: './src/js/contact.js',
    article: './src/js/article.js',
    clinic01: './src/js/clinic-01.js',
    clinic02: './src/js/clinic-02.js',
    clinic03: './src/js/clinic-03.js',
    clinic04: './src/js/clinic-04.js',
    eregistration: './src/js/e-registration.js'
  },
  output: {
    // outputPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }, 
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: cssConfig
      }, 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=images/[name].[ext]',
          // 'file-loader?name=[name].[ext]&outputPath=images/',
          {
            loader: 'image-webpack-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: 
              {
                inlineRequires: '\/images\/'
              }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    stats: 'errors-only',
    port: 8001
    // open: true
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/prod-files' }
    ]),
    new HtmlWebpackPlugin({
      title: 'Świętokrzyski Ośrodek Terapii - Psychiatra, Psycholog - Ostrowiec Św.',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'landing'],
      template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new HtmlWebpackPlugin({
      title: 'Świętokrzyski Ośrodek Terapii - Specialiści',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'specialists'],
      filename: 'specjalisci.html',
      template: './src/specjalisci.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Świętokrzyski Ośrodek Terapii - Poradnie',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'clinics'],
      filename: 'poradnie.html',
      template: './src/poradnie.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Świętokrzyski Ośrodek Terapii - Kontakt',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'contact'],
      filename: 'kontakt.html',
      template: './src/kontakt.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Świętokrzyski Ośrodek Terapii - Specjalista',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'article'],
      filename: 'article.html',
      template: './src/article.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Świętokrzyski Ośrodek Terapii - Poradnia Zdrowia Psychicznego',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'clinic01'],
      filename: 'poradnia-zdrowia-psychicznego.html',
      template: './src/poradnia-zdrowia-psychicznego.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Świętokrzyski Ośrodek Terapii - Poradnia psychologiczna',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'clinic02'],
      filename: 'poradnia-psychologiczna.html',
      template: './src/poradnia-psychologiczna.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Świętokrzyski Ośrodek Terapii - Poradnia uzależnień',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'clinic03'],
      filename: 'poradnia-uzaleznien.html',
      template: './src/poradnia-uzaleznien.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Świętokrzyski Ośrodek Terapii - Zespół leczenia środowiskowego',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'clinic04'],
      filename: 'zespol-leczenia-srodowiskowego.html',
      template: './src/zespol-leczenia-srodowiskowego.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Świętokrzyski Ośrodek Terapii E-rejestracja',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'eregistration'],
      filename: 'e-registration.html',
      template: './src/e-registration.html',
    }),
    new FaviconsWebpackPlugin('./src/images/sot.png'),
    new ExtractTextPlugin({
      filename: './[name].css',
      disable: !isProd
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ]
}