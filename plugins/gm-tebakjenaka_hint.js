let handler = async (m, { conn }) => {
    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (!(id in conn.tebakjenaka)) throw false
    let json = conn.tebakjenaka[id][1]
    let ans = json.result.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.tebakjenaka[id][0])
}
handler.command = /^teje$/i
handler.limit = true
module.exports = handler