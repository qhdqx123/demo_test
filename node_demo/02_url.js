const url = require('url')
const http = require('http')

http.createServer((req, res)=>{
    // http://localhost:3000/?userName=qhd&userAge=23
    var result = url.parse(req.url, true)
    console.log(result)

    res.writeHead(200, {
        "Content-Head" : "text/html;charset=utf-8"
    })

    res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

    res.end()

}).listen(3000)

// console.log(url);
/**
 * Console：
 { 
   Url: [Function: Url],
    parse: [Function: urlParse], // 获取地址信息
    resolve: [Function: urlResolve], // 追加或者替换地址
    resolveObject: [Function: urlResolveObject],
    format: [Function: urlFormat], // 逆向 parse，根据地址信息获取原 url 信息
    URL: [Function: URL],
    URLSearchParams: [Function: URLSearchParams],
    domainToASCII: [Function: domainToASCII],
    domainToUnicode: [Function: domainToUnicode] 
  }
 */


// console.log(url.parse("http://www.baidu.com/new?name=zhangsan"));
/**
 * Console：
  Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?name=zhangsan',
    query: 'name=zhangsan',
    pathname: '/new',
    path: '/new?name=zhangsan',
    href: 'http://www.baidu.com/new?name=zhangsan' 
  }
 */

