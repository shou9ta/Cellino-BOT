let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api-kaysa.herokuapp.com/api/meme?apikey=KaysaS')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.video) throw 'Error!'
   conn.sendFile(m.chat, json.video, 'meme.mp4', `Lucu ?`, m)
}
handler.help = ['mememp4']
handler.tags = ['fun', 'internet']
handler.command = /^(mememp4)$/i

handler.limit = true

module.exports = handler
