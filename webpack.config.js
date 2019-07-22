const path = require('path')

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    devtool:'inline-source-map',
    devServer: {
        contentBase: './dist'
        },
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|gif|png)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: require.resolve('jquery'),
                use: [{
                  loader: 'expose-loader',
                  options: 'jQuery'
                },{
                  loader: 'expose-loader',
                  options: '$'
                }]
            }
        ]
    }
}