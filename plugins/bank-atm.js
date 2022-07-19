let { MessageType } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, usedPrefix, text }) => {
    let { premium, registered } = global.db.data.users[m.sender]
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let limit = global.db.data.users[m.sender].limit
    let username = conn.getName(who)
    let money = global.db.data.users[m.sender].money
    let atm = global.db.data.users[m.sender].atm
         let judul = 'Hi '
        const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `By AhmdLui 🥶🥶`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
      const sections = [
      {
        title: 'By AhmdLui 🥶🥶️',
        rows: [
          { title: 'Profile', rowId: `${usedPrefix}profile` },
          { title: 'Ambil Semua Uang Yg di Bank', rowId: `${usedPrefix}narik ${atm}` },
          { title: 'Tabung Semua Uang Di Bank', rowId: `${usedPrefix}nabung ${money}` },
                    
        ]
}
    ]
    const listMessage = {
      text: `
✧—[ *User* ]
│ *Name* : ${username}
│🌟  *Premium:* ${premium ? "✅" :"❌"}
│📑  *Registered:* ${registered ? '✅': '❌'}
│⛔  *Banned:* ❌
┝─[ *Limit* 」
│
│ 🎫 *Limit* : ${limit}
│
┝─[ *Bank* 」
│ 💳 *Bank* : ${atm}
│ 💹 *Money* : ${money}
╰─────···─✧`,
      footer: ``,
      title: ``,
      buttonText: "Narik & Nabung",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})

}
handler.help = ['atm', 'bank', 'my']
handler.tags = ['rpg', 'exp']
handler.command = /^(atm|bank|my)$/i
//udah di maapin kan?
module.exports = handler
