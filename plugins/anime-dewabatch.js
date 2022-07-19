let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command, text }) => {
    heum = await fetch(`https://alfians-api.herokuapp.com/api/dewabatch?q=${text}`)
   let hasil = `Anime Nya Nih :) \n\n ${res.data.result}`
   m.reply(`hasil`)
}
handler.help = ['dewabatch']
handler.tags = ['anime']
handler.command = /^dewabatch$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler