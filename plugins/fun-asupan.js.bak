let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api-kaysa.herokuapp.com/api/asupan?apikey=cYkvx3dy')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.video) throw 'Error!'
  conn.sendFile(m.chat, json.video, 'asu.mp4', 'Istri gw nih 😳', m)
}
handler.help = ['asupan']
handler.tags = ['asupan']
handler.command = /^(asupan)$/i

handler.limit = true

module.exports = handler