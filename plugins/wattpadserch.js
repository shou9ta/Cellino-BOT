let fetch = require('node-fetch')
let handler = async(m, { conn, text, command, usedPrefix }) => {
    if (!text) throw `Harap masukan Judulnya \n\n\nContoh : ${usedPrefix + command} orang ngaji`
    let res = await fetch(`https://api-xcoders.xyz/api/search/wattpad?query=${text}&apikey=xcoders`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.data.map((v, i) => `#${i + 1}. \n*Judul:* ${v.title}\n*Deskripsi:* ${v.description}\n*Author:* ${v.user.name}\n*Cover:* ${v.cover}\n*Dilihat:* ${v.readCount} orang\n*Jumlah vote:* ${v.voteCount}\n*Link:* ${v.url}\n\n*Dibuat pada tanggal:* ${v.lastPublishedPart.createDate}\n\n\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['wattpadsearch <judul>']
handler.tags = ['internet']
handler.command = /^(wattpadsearch)$/i


module.exports = handler