let fetch = require('node-fetch')
let handler = async(m, { conn, text, command, usedPrefix }) => {
    let res = await fetch(`https://api-xcoders.xyz/api/lk21/ftv?apikey=xcoders`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `${i + 1}. \n*Judul:* ${v.title}\n*Link:* ${v.url}\n\n`).join('\n') 
    if (json.status) await conn.reply(m.chat, keqing, ftroli)
    else throw json
}
handler.help = ['lk21ftv']
handler.tags = ['film']
handler.command = /^(lk21ftv)$/i

handler.limit = 2

module.exports = handler