//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
  let json = await require("../lib/scrape").hentai('')
  let bilek = pickRandom(json)
  
  conn.sendButtonVid(m.chat, bilek.video_2, `Title : ${bilek.title}\nDitonton : ${bilek.views_count}`, `${bilek.link}`, `Next`, `${ usedPrefix + command }`, fkontak)
}

handler.help = ['hentaivideo']
handler.tags = ['+18']
handler.command = /^(hentaivideo)$/i

handler.private = true
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}