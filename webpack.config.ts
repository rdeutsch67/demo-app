const webpack = require('webpack');

module.exports = function (env) {

  return {
    entry: {
      'vendor': ['./src/polyfills.ts', './src/vendor.ts',
      '@angular/platform-browser-dynamic'],
      'app': './src/main.ts'
    },
    module: {
      rules: [
        {
          test: /\.(css|html|xlf)$/,
          use: 'raw-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
          use: 'file-loader?name=assets/[name].[ext]'
        },
        {
          test: /\.ts$/,
          use: [
            'awesome-typescript-loader?configFileName=src/tsconfig.app.json',
            'angular2-template-loader',
            'angular-router-loader'
          ]
        }
      ],
      loaders: [
        {
          test: /\.ts$/,
          loaders: ['angular2-router-loader?loader=system', 'angular2-template-loader', 'awesome-typescript-loader']
        }
        ]
    },
    output: {
      path: __dirname + '/dist/build',
      filename: '[name].js' },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: module => module.resource &&
          module.resource.startsWith(__dirname + '/node_modules'),
        chunks: [
          'app'
        ]
      }),
    ],
    devtool: 'cheap-module-source-map'
    //devtool: "#inline-source-map",
  };

};
