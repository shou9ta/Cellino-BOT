//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai teks \n\nContoh : .xnxxdl https://www.xnxx.com/video-13ezat5c/fuck_while_other_is_away`
    let res = await fetch(`https://api-xcoders.xyz/api/download/xnxx?url=${text}&apikey=xcoders`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.url, 'bkp.mp4', `Title : ${json.result.title}\nDurasi : ${json.result.duration}\nJumlah Ditonton : ${json.result.views}`, m)
}
handler.help = ['xnxxdl *link*']
handler.tags = ['18+']
handler.command = /^xnxxdl$/i

handler.private = true
handler.limit = 12

module.exports = handler