//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai teks \n\nContoh : ${usedPrefix + command} https://vt.tiktok.com/ZSdt3AP9D/?k=1`
    let res = await fetch(`https://api-kaysa.herokuapp.com/api/tiktok?url=${text}&apikey=KaysaS`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.send2ButtonVid(m.chat, json.medias[1].url, `Title : ${json.title}`, `Beliau ini kocak gaming`, `Wm`, `.tiktok ${text}`, `Audio`, `.tiktokaudio ${text}`, m, true)
}
handler.help = ['tiktoknowm *link*']
handler.tags = ['downloader']
handler.command = /^tiktoknowm$/i

handler.register = true
handler.limit = true

module.exports = handler