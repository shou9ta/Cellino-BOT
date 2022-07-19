let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch(`https://api-kaysa.herokuapp.com/api/${command}?apikey=KaysaS`)
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.video) throw 'Error!'
   conn.sendFile(m.chat, json.video, 'meme.mp4', `Nih jedag jedug bikin sakit matanya`, m)
}
handler.help = ['jjfreefire', 'jjml', 'jjpubg', 'jjanime']
handler.tags = ['fun', 'asupan']
handler.command = /^(jjfreefire|jjml|jjpubg|jjanime)$/i

handler.limit = true

module.exports = handler