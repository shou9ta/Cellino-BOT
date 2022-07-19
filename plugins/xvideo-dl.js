//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai teks \n\nContoh : ${usedPrefix + command} https://www.xvideos.com/video25381801/beautiful_sisters_have_been_tentacled`
    let res = await fetch(`https://api-xcoders.xyz/api/download/xvideos?url=${text}&apikey=xcoders`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
   await conn.sendFile(m.chat, json.result.url, 'bokp.mp4', `Title : ${json.result.title}\nViews : ${json.result.views}\nVote : ${json.result.vote}\nLike : ${json.result.like_count}\nDislike : ${json.result.dislike_count}\n\n\nkeyword : ${json.result.keyword}`, m)
}
handler.help = ['xvideosdl *link*']
handler.tags = ['18+']
handler.command = /^xvideosdl$/i

handler.private = true
handler.limit = 11

module.exports = handler