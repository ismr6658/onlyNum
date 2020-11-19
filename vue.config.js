const path = require("path");
module.exports = {
    configureWebpack: {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'onlynum.min.js',
            library: 'onlynumUI',
            libraryTarget: 'umd',
            umdNamedDefine: true
        }
    }


}