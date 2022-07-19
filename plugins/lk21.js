//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    let res = await fetch(`https://api-xcoders.xyz/api/lk21/search?query=avenger&apikey=xcoders`)
    let json = await res.json()
    let hasil = `${pickRandom(['0', '1', '2', '3', '4', '5'])}`
    await conn.sendButton(m.chat, `Title : ${json.result[${hasil}].title}`, `tes`, `o`, `o`, m)
  }

handler.command = /^teslk21/i

module.exports = handler



function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]
}





//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    let res = await fetch(`https://api-xcoders.xyz/api/lk21/search?query=avenger&apikey=xcoders`)
    let json = await res.json()
    let hasil = `${json.result}`
    let hasilnye = hasil[Math.floor(Math.random() * hasil.length)]
    await conn.sendButton(m.chat, `Title : ${hasilnye.title}`, `tes`, `o`, m)
  }

handler.command = /^teslk21/i

module.exports = handler