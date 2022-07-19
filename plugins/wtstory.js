//by AsuKidal
//Thanks to farhan

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai teks \n\nContoh : ${usedPrefix + command} https://www.wattpad.com/story/228839428-the-door-bts-horor-tamat`
    let res = await fetch(`https://api-xcoders.xyz/api/search/storywp?url=${text}&apikey=xcoders`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendButtonImg(m.chat, json.result.thumbnail, `*${json.result.title}*\nDibuat oleh *_${json.result.author_name}_*`, `${json.result.description}\n\nPembaca : ${json.result.reading} Orang\nVote : ${json.result.vote}\nBab : ${json.result.bab}\n`, 'Langsung Ke cerita', `.wattpad ${json.result.result[0].url}`, m)
}
handler.help = ['wattpadstory *link*']
handler.tags = ['downloader', 'internet']
handler.command = /^wattpadstory$/i

handler.register = true
handler.limit = 4

module.exports = handler