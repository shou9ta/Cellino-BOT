let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    let res = await fetch('https://x-restapi.herokuapp.com/api/topanime?apikey=BETA')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.data.map((v, i) => `#${i + 1}. \n*Judul:* ${v.Judul}\n*Score:* ${v.Score}\n*Informasi:* ${v.Informasi}\nJangan Lupa link nya ${v.Link}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['topanime']
handler.tags = ['anime']
handler.command = /^(topanime)$/i


module.exports = handler