// RECODE ALYAAXZY

let fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (id in conn.tebaktebakan) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaktebakan[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tebek untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebaktebakan[id] = [
        await conn.sendBut(m.chat, caption, `Recode by Lui`, 'Bantuan', `.tebek`, m, false),
        json, poin,
        setTimeout(async () => {
            if (conn.tebaktebakan[id]) await conn.sendBut(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, `Recode by Lui`, 'Tebak tebakan', `.tebaktebakan`, conn.tebaktebakan[id][0])
            delete conn.tebaktebakan[id]
        }, timeout)
    ]
}
handler.help = ['tebaktebakan']
handler.tags = ['game']
handler.command = /^tebaktebakan/i

module.exports = handler
