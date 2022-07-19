/by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai teks \n\nContoh : ${usedPrefix + command} https://vt.tiktok.com/ZSdt3AP9D/?k=1`
    let res = await fetch(`https://api-kaysa.herokuapp.com/api/tiktok?url=${text}&apikey=KaysaS`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.medias[2].url, 'tiktokaudio.mp3', `
┏┉━━━━━━━━━━━❏
┆ *YOUTUBE MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Judul:* 
│• *Type:* MP3
┆• *📥 Ukuran File:* 
└❏
`.trim(), m, null, {
   document: { url: json.medias[2].url, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3', conntextInfo: {
        externalAdReply: {
            title: '▶︎ ━━━━━━━•────────────────── ', 
            body: 'Now Playing...',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/9e323ad1f4b2d52579416.jpg')).buffer(),
         mediaUrl: `https://youtu.be/E1nLzgkOH8A`
        }
     }
  })
}
handler.help = ['tiktokaudio *link*']
handler.tags = ['downloader']
handler.command = /^tiktokaudio$/i

handler.register = true
handler.limit = true

module.exports = handler