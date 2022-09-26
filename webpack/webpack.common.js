const path = require('path')

module.exports = {
    module: {

        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
            },

        ]

    },

    output: {
        path: path.resolve(__dirname, '..', 'build'),
        filename: 'bundle.js'
    }
    ,
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node',
    node: {
        __filename: false,
        __dirname: false
    }
}