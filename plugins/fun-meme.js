let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = ('https://api.zacros.my.id/randomimg/meme')
    await conn.sendButtonImg(m.chat, url, '*MEME*', wm, 'NEXT', '.meme',m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['meme']
handler.tags = ['fun', 'internet']
handler.command = /^(meme)$/i
handler.limit = false

module.exports = handler
