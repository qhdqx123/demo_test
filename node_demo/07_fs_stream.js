const fs = require('fs')

let fileReadStream = fs.createReadStream('index.js')

let count = 0

let str = ''

fileReadStream.on('data', (chunk)=>{
    console.log(`${++count} 接收到：${chunk.length}`);
    str += chunk;
})


// 读取完成
fileReadStream.on('end', () => {
    console.log("——结束——");
    console.log(count);
    console.log(str);
  
    // Console：——结束——
    // 1
    // console.log("Hello World！");
  })
  // 读取失败
  fileReadStream.on('error', (error) => {
    console.log(error);
  })


  let data = 'console.log("Hello World! 我要存入数据！")'

  let writeStream = fs.createWriteStream('index.js')

  writeStream.write(data, 'utf8')

  writeStream.end()

  writeStream.on('finish', ()=>{
      console.log('写入完成')
  })
