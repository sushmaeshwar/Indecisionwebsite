//this is actually a nodde script
//we have to know entry point and output

//in this exports object below we are gonna mention configuration details
//https://webpack.js.org


const path = require('path'); // now we have access to path.join and require is a node's builtin method

//webpack.js.org provides details about module object

module.exports = {
    entry: './src/app.js',
    output:{
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]
    },
    //webpack.js.org/configuration
    devtool: 'cheap-module-eval-source-map', //this is necessary so when we run into errors console hows in which file exactly the error is. this is for development mode.
    devServer: {
        contentBase: path.join(__dirname,'public')
    }
};

//loader