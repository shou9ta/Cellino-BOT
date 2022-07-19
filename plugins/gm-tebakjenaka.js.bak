let fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (id in conn.tebakjenaka) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakjenaka[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/tebakjenaka.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.result.pertanyaan}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teje untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakjenaka[id] = [
        await conn.sendBut(m.chat, caption, `Recode by Lui`, 'Bantuan', `.teje`, m, false),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakjenaka[id]) await conn.sendBut(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, `Recode by Lui`, 'Teka Teki', `.tebakjenaka`, conn.tebakjenaka[id][0])
            delete conn.tebakjenaka[id]
        }, timeout)
    ]
}
handler.help = ['tebakjenaka']
handler.tags = ['game']
handler.command = /^tebakjenaka/i

module.exports = handler