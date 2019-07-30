const url = require('url');

let site = 'http://www.xr.com/a/b/index.html?a=1&b=2';
let { pathname, query } = url.parse(site, true); // url.parse() 解析网址，true 的意思是把参数解析成对象

console.log(pathname, query);
// /a/b/index.html  { a: '1', b: '2' }
