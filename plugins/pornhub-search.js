let fetch = require('node-fetch')
let handler = async(m, { conn, text, command, usedPrefix }) => {
    if (!text) throw `Harap masukan Judulnya \n\n\nContoh : .pornhubsearch mabar free fire sambil ngwe`
    let res = await fetch(`http://kocakz.herokuapp.com/api/media/pornhub/search?query=${text}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.res.results.map((v, i) => `#${i + 1}. \n*Judul:* ${v.title}\n*Ditonton:* ${v.views} Orang\n*Pembuat:* ${v.author}\n*Link:* ${v.link}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['pornhubsearch <judul>']
handler.tags = ['18+']
handler.command = /^(pornhubsearch)$/i
handler.private = true
handler.limit = 8

module.exports = handler