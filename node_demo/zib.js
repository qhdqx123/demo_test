const fs = require('fs');
const zlib = require('zlib');

let rs = fs.createReadStream('tree.jpg');
let gz = zlib.createGzip();
let ws = fs.createWriteStream('tree.jpg.gz');

rs.pipe(gz).pipe(ws);  // 原始文件 => 压缩 => 写入

rs.on('error', err => {
  console.log(err);
});
ws.on('finish', () => {
  console.log('成功');
})
