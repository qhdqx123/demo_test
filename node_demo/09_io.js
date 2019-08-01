// 非阻塞 I/O 事件驱动

const fs = require('fs')

let events = require('events')
let EventEmitter = new events.EventEmitter()

// getExt = (callback) =>{
//     fs.readFile('./08_ext.json', (err, data)=>{
//         callback(data)
//     })
// }

// getExt(result=>{
//     console.log(result.toString())
// })


getExt = ()=>{
    fs.readFile('./08_ext.json', (err, data)=>{
        EventEmitter.emit('data', data.toString())
    })
}

getExt()

EventEmitter.on('data', (ext)=>{
    console.log(ext)
})
