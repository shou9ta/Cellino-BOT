//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai teks \n\nContoh : ${usedPrefix + command} https://www.wattpad.com/699514963-bucin-satu`
    let res = await fetch(`https://api-xcoders.xyz/api/search/bacawp?url=${text}&apikey=xcoders`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendButtonImg(m.chat, json.result.thumb, `*${json.result.title}*`, `${json.result.story}\n\nAuthor : ${json.result.author_name}\nJumlah pembaca : ${json.result.reading}\nVote : ${json.result.vote}\nKomentar : ${json.result.comment}`, 'Next Chapter', `.wattpad ${json.result.next_page} `, m)
}
handler.help = ['wattpad *link*']
handler.tags = ['downloader', 'internet']
handler.command = /^wattpad$/i

handler.register = true
handler.limit = 5

module.exports = handler