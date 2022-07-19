let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    let res = await fetch('https://x-restapi.herokuapp.com/api/anoboy-last?apikey=BETA')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.data.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*Info:* ${v.time}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['anoboylatest']
handler.tags = ['anime']
handler.command = /^(anoboylatest)$/i


module.exports = handler