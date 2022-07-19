let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
    let src = await (await fetch('https://raw.githubusercontent.com/yogipw/yogipw/main/ppcouple.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
 await conn.sendFile(m.chat, json.male, 'cowo.jpg', `Nih cowoknya`, m)
       conn.sendFile(m.chat, json.female, 'cewe.jpg', `Nih cewe nya`, m)

}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet', 'anime']
handler.command = /^(pp(cp|couple))$/i
handler.limit = true

module.exports = handler