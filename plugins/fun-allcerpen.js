//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    let res = await fetch(`https://api-xcoders.xyz/api/random/cerpen/${command}?apikey=xcoders`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendButton(m.chat, ` *${json.result.title}* By _${json.result.author_name}_\n\n${json.result.story}`, wm, `Lagi `, `${usedPrefix + command}`, fliveLoc2)
}
handler.help = ['jawa', 'horor', 'perjuangan', 'sahabat', 'cinta', 'lucu']
handler.tags = ['cerita']
handler.command = /^(jawa|horor|perjuangan|sahabat|cinta|lucu)$/i

handler.limit = true

module.exports = handler