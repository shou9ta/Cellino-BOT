let moment = require('moment-timezone')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, {text}) => {
  let res = await fetch('https://x-restapi.herokuapp.com/api/random-cehor?apikey=BETA')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumb) throw json
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(4001)
let anu = `*${json.judul}*
${readMore}
${json.desc}`
   await conn.sendButtonImg(m.chat, json.thumb, anu, wm, 'Cerita Horor', `.ceritahoror`, m)
handler.help = ['ceritahorror', 'ceritahantu']
handler.tags = ['internet']
handler.command = /^(ceritahorror|ceritahoror|ceritahantu)$/i
handler.limit = true

module.exports = handler
