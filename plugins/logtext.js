//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan kata atau nama sebagai teks \n\nContoh : ${usedPrefix + command} Lui tzy`
    let res = (`https://api-kaysa.herokuapp.com/api/textpro/${command}?text=${text}&apikey=KaysaS`)
    await conn.sendFile(m.chat, res, 'bkp.jpg', `Logo text Maker by ${command}`, m)
}
handler.help = ['devil *text*', 'toxic *text*', 'demon *text*', 'magma *text*', 'graffiti *text*', 'skeleton *text*', 'glitch *text*', 'blackpink *text*', 'neon *text*', 'thunder *text*', 'thunder2 *text*', 'cloud *text*', 'blood *text*', 'lava *text', 'greenneon *text*', 'glitter *text*', 'glow *text*', 'galaxy *text*', 'newyear2022 *text*']
handler.tags = ['nulis']
handler.command = /^devil|toxic|demon|magma|graffiti|skeleton|glitch|blackpink|neon|thunder|thunder2|cloud|blood|lava|greennenon|glitter|glow|galaxy|newyear2022$/i

handler.register = true
handler.limit = 3

module.exports = handler