
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://nekos.life/api/v2/img/holo')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, json.url, '2d ?', '😅👍', 'Lagi', `.holo`, m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['holo']
handler.tags = ['anime']
handler.command = /^(holo)$/i

handler.limit = true

module.exports = handler
