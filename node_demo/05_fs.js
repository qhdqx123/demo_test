const fs = require('fs')

// fs.stat 检测是文件还是目录
// fs.mkdir 创建目录
// fs.writeFile 创建写入文件
// fs.appendFile 追加文件
// fs.readFile 读取文件
// fs.readdir 读取目录
// fs.rename 重命名
// fs.rmdir 删除目录
// fs.unlink 删除文件



fs.stat('index.js', (error, stats)=>{
    if(error){
        console.log(error)
        return false
    }else {
        console.log(stats)
        return false
    }
})

// Stats {
//     dev: 206178253,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: undefined,
//     ino: 1407374883661448,
//     size: 0,
//     blocks: undefined,
//     atimeMs: 1564553772820.5266,
//     mtimeMs: 1564553772820.5266,
//     ctimeMs: 1564553772820.5266,
//     birthtimeMs: 1564553772820.5266,
//     atime: 2019-07-31T06:16:12.821Z,
//     mtime: 2019-07-31T06:16:12.821Z,
//     ctime: 2019-07-31T06:16:12.821Z,
//     birthtime: 2019-07-31T06:16:12.821Z }


fs.mkdir('css', (err)=>{
    if(err){
        console.log(err)
    } else {
        console.log('创建成功')
    }
})

fs.rmdir('css', (err)=>{
    if(err){
        console.log(err)
        return false;
    } else{
        console.log('移除成功')
    }
})

fs.writeFile('index.js', 'hello world', (err)=>{
    if(err) throw err
    console.log('写入成功')
})

fs.appendFile('index.js', '这是追加的文本', (err)=>{
    if(err) throw err
    console.log('追加成功')
})


fs.readFile('index.js', (err, data) => {
    if(err) {
      console.log(err);
      return false;
    } else {
      console.log("读取文件成功！");
      console.log(data);
      // Console：
      // 读取文件成功！
      // <Buffer 48 65 6c 6c 6f 20 6a 73 6c 69 61 6e 67 e8 bf 99 e6 ae b5 e6 96 87 e6 9c ac e6 98 af e8 a6 81 e8 bf bd e5 8a a0 e7 9a 84 e5 86 85 e5 ae b9>
    }
  })


  fs.readdir('node_modules', (err, data) => {
    if(err) {
      console.log(err);
      return false;
    } else {
      console.log("读取目录成功！");
      console.log(data);
      // Console：
      // 读取目录成功！
      // [ '03_tool-multiply.js', 'qhd-module' ]
    }
  })


//   fs.rename('index.js', 'test.js', (err) => {
//     if(err) {
//       console.log(err);
//       return false;
//     } else {
//       console.log("重命名成功！");
//     }
//   })


// fs.rename 还有更劲爆的功能：剪切

// fs.rename('index.js', 'node_modules/index.js', (err) => {
//     if(err) {
//       console.log(err);
//       return false;
//     } else {
//       console.log("剪切成功！");
//     }
//   })