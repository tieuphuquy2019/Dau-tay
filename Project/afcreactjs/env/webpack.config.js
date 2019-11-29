const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './ReactProject/index.js',
//    entry: './ReactProject/react/chu.js',
    // entry: './testReact/src/index.js',
    // entry: './ReduxProject/Redux/src/index_1.js',
//    entry: './ReduxProject/Redux/src/indexa.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env',
                        '@babel/react', {
                            'plugins': ['@babel/plugin-proposal-class-properties']
                        }
                    ]
                },
                
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                //loader: "babel-loader",
                //loaders: ["style-loader", "css-loader", "less-loader"]
                 loaders: ["style-loader", "css-loader"],
                //loader: ['babel-loader','css-loader'],
                //use: ['style-loader', 'css-loader'],
            },
            {

                exclude: /node_modules/,
                //loader: "babel-loader",
                //loaders: ["style-loader", "css-loader", "less-loader"]
                "loader": ["css-loader", "sass-loader"],
                //loader: ['babel-loader','css-loader'],
                //use: ['style-loader', 'css-loader'],
                "test": /\.scss$/
            },
            {
                test: /\.exec\.js$/,
                use: [ 'script-loader' ]
            },
            {
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            },
           


        ]
   },
   plugins:[
      new HtmlWebpackPlugin({
        //  template: './ReactProject/react/index.html',
         template: './ReactProject/index.html',
            // template: './testReact/src/index.html',
          // template: './ReduxProject/Redux/src/index1.html'
        // template: './ReduxProject/Redux/src/template.html',
        //   template: './ReduxProject/Redux/src/test.html',
        //   template: './ReduxProject/Redux/src/test1.html',
      })
   ]
};