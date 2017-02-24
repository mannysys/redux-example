
module.exports = {
  entry: './src/index.js',  //是指定webpack要打包的那个入口文件
  //这个属性output是打包以后生成的文件放到那里叫什么名字 path指定以下文件所在路径
  output: {
    path: __dirname,        //是将生成的文件放在跟该配置文件同一目录下面
    filename: 'bundle.js'   //打包后生成文件的名字
  },
  //属性module表示要使用的模块
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        "react-hot-loader",
        "babel-loader"
      ],  //知道所有.js所有文件都需要使用babel处理下转换
    }]

  }

}
