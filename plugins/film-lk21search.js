let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    if (!text) throw `Masukin Text sebagai Judul !!`
    let res = await fetch(`https://api-xcoders.xyz/api/lk21/search?query=${text}&apikey=xcoders`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*Genre:* ${v.genre}\n*rating:* ${v.rating}\n*Link Url:* ${v.url}\n\n`).join('\n') 
    if (json.status) await
conn.reply(m.chat, keqing, ftroli)
    else throw json
}
handler.help = ['lk21search']
handler.tags = ['film']
handler.command = /^(lk21search)$/i

handler.limit = 2

module.exports = handler