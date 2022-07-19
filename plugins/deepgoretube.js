
//Kena mental

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Masukin dlu link nya dari web deepgoretube.site trus klik video yg lu suka trus salin link kirim kesini dengan format .deepgore *link*`
    let res = await fetch(`https://api-xcoders.xyz/api/download/gore?url=${text}&apikey=xcoders`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    conn.sendFile(m.chat, json.result.url, 'gore.mp4', `Judul : ${json.result.title}\nAuthor : ${json.result.author}\nUpload : ${json.result.published}\nLike : ${json.result.likes}\nDislike : ${json.result.dislikes}\nJumlah Komentar : ${json.result.comment}\nArtikel : ${json.result.article}\nKeyword : ${json.result.keyword}\n Desk : ${json.result.description}\nUrl : ${json.result.url}`, m)
}
handler.help = ['deepgore *link*']
handler.tags = ['18+']
handler.command = /^deepgore$/i

handler.private = true
handler.limit = 2

module.exports = handler