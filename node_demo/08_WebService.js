// 创建web服务器
let http = require("http");
let fs = require("fs");
let url = require('url')
let path = require('path')

http.createServer((req, res) => {
  // 获取响应路径
  let pathName = url.parse(req.url).pathname;
  console.log(pathName, 'pathName')

  // 默认加载路径
  if (pathName == "/") {
    // 默认加载的首页
    pathName = "index.html";
  }
  let extName = path.extname(pathName)

  // 过滤 /favicon.ico 的请求
  if (pathName != "/favicon.ico") {
    // 获取 08_WebService 下的 index.html
    fs.readFile("./08_WebService/" + pathName, (err, data) => {
      if (err) {
        // 如果不存在这个文件
        console.log("404 Not Found!");
        fs.readFile('./08_WebService/404.html', (errorNotFound, dataNotFound) => {
          if(errorNotFound) {
            console.log(errorNotFound);
          } else {
            res.writeHead(200, {
              "Content-Type": "text/html; charset='utf-8'"
            });
            // 读取写入文件
            res.write(dataNotFound);
            // 结束响应
            res.end();
          }
        })
        return;
      } else {
        let ext = getExt(extName);
        // 设置请求头
        res.writeHead(200, {
          "Content-Type":  ext +"; charset='utf-8'"
        });
        // 读取写入文件
        res.write(data);
        // 结束响应
        res.end();
      }
    });
  }
}).listen(8000);


// 获取后缀名
getExt = (extName) => {
 let data = fs.readFileSync('./08_ext.json')
 let ext = JSON.parse(data.toString())
 return ext[extName]
}