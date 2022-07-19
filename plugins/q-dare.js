let fetch = require('node-fetch') 
let handler  = async (m) => {
  let res = await fetch('https://raw.githubusercontent.com/BochilGaming/database/master/kata-kata/dare.json')
  let json = await res.json()
  conn.sendBut(m.chat, `${pickRandom(json)}`, `ini wm`, 'Dare', `.dare`, m)
}
handler.help = ['dare']
handler.tags = ['quotes']
handler.command = /^(dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.round(Math.random() * list.length)]
}
