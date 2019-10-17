const config = {
    entry: {

    },
    output: {
        chunkFilename: '',      //string function  (non-entry) chunk 文件的名称
        chunkLoadTimeout: 12000,  //integer
        filename: '[name].bundle.js', //string function  决定了每个输出 bundle 的名称
        // " [id].bundle.js" "[name].[hash].bundle.js" "[chunkhash].bundle.js"
        library: 'MyLibrary', // string object
        libraryTarget: 'var',  //配置如何暴露 library  此选项与分配给 output.library 的值一同使用。 amd umd commonjs2 等
        path: path.resolve(__dirname, 'dist'),  // string output 目录对应一个绝对路径。
        pathinfo: false, //boolean
        publicPath: '/assets/', //string function
        // This option specifies the public URL of the output directory when referenced in a browser. 
        // webpack-dev-server 也会默认从 publicPath 为基准，使用它来决定在哪个目录下启用服务，来访问 webpack 输出的文件。
    }
}