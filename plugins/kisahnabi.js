let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix }) => {
         let judul = 'Hi '
        const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `By AhmdLui 🥶🥶`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
      const sections = [
      {
        title: 'By AhmdLui 🥶🥶️',
        rows: [
          { title: 'Nabi Adam AS', rowId: `${usedPrefix}adam` },
          { title: 'Nabi Idris AS', rowId: `${usedPrefix}iddris` },
          { title: 'Nabi Nuh AS', rowId: `${usedPrefix}nuh` },
          { title: 'Nabi Hud AS', rowId: `${usedPrefix}hud` },
          { title: 'Nabi Shaleh AS', rowId: `${usedPrefix}shaleh` },
          { title: 'Nabi Ibrahim AS', rowId: `${usedPrefix}ibrahim` },
          { title: 'Nabi Luth AS', rowId: `${usedPrefix}luth` },
          { title: 'Nabi Ismail AS', rowId: `${usedPrefix}ismail` },
          { title: 'Nabi Ishaq AS', rowId: `${usedPrefix}ishaq` },
          { title: 'Nabi Ya\'qub AS', rowId: `${usedPrefix}yaqub` },
          { title: 'Nabi Yusuf AS', rowId: `${usedPrefix}yusuf` },
          { title: 'Nabi Ayyub AS', rowId: `${usedPrefix}ayyub` },
          { title: 'Nabi Syuaib AS', rowId: `${usedPrefix}syuaib` },
          { title: 'Nabi Musa AS', rowId: `${usedPrefix}musa` },
          { title: 'Nabi Harun AS', rowId: `${usedPrefix}harun` },
          { title: 'Nabi Dzulkifli AS', rowId: `${usedPrefix}dzulkifli` },
          { title: 'Nabi Daud AS', rowId: `${usedPrefix}daud` },
          { title: 'Nabi Sulaiman AS', rowId: `${usedPrefix}sulaiman` },
          { title: 'Nabi Ilyas AS', rowId: `${usedPrefix}ilyas` },
          { title: 'Nabi Ilyasa AS', rowId: `${usedPrefix}ilyasa` },
          { title: 'Nabi Yunus AS', rowId: `${usedPrefix}yunus` },
          { title: 'Nabi Dzakaria AS', rowId: `${usedPrefix}dzakaria` },
          { title: 'Nabi Yahya AS', rowId: `${usedPrefix}yahya` },
          { title: 'Nabi Isa AS', rowId: `${usedPrefix}isa` },
          { title: 'Nabi muhammad SAW', rowId: `${usedPrefix}muhammad` },
                    
        ]
}
    ]
    const listMessage = {
      text: `
Nih!!?! Kisah nya`,
      footer: `Bilek 😅👆`,
      title: ``,
      buttonText: "Klik here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})

}
handler.help = ['kisahnabi']
handler.tags = ['', 'quran']
handler.command = /^(kisahnabi)$/i
handler.register = true
handler.limit = true

module.exports = handler
let wm = global.wm