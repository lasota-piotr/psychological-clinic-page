const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    clinic04: './src/js/clinic-04.js'
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
    // open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Świętokrzyski Ośrodek Terapii',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'landing'],
      template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new HtmlWebpackPlugin({
      title: 'Specialiści',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'specialists'],
      filename: 'specialists.html',
      template: './src/specialists.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Poradnie',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'clinics'],
      filename: 'clinics.html',
      template: './src/clinics.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Kontakt',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'contact'],
      filename: 'contact.html',
      template: './src/contact.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Specjalista',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'article'],
      filename: 'article.html',
      template: './src/article.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Poradnia Zdrowia Psychicznego',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'clinic01'],
      filename: 'clinic-01.html',
      template: './src/clinic-01.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Poradnia zdrowia psychicznego',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'clinic02'],
      filename: 'clinic-02.html',
      template: './src/clinic-02.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Poradnia uzależnień',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['app', 'clinic03'],
      filename: 'clinic-03.html',
      template: './src/clinic-03.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Zespół leczenia środowiskowego',
      // minify: {
      //   collapseWhitespace: true
      // },
      hash: true,
      chunks: ['app', 'clinic04'],
      filename: 'clinic-04.html',
      template: './src/clinic-04.html',
    }),
    new ExtractTextPlugin({
      filename: './[name].css',
      disable: !isProd
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ]
}