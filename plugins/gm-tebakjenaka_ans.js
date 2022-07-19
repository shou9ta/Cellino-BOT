const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teje/i.test(m.quoted.contentText)) return !0
    this.tebakjenaka = this.tebakjenaka ? this.tebakjenaka : {}
    if (!(id in this.tebakjenaka)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.tebakjenaka[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakjenaka[id][1]))
        if (['.teje', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.result.jawaban.toLowerCase()) {
            db.data.users[m.sender].exp += this.tebakjenaka[id][2]
            db.data.users[m.sender].dailyReward += 1
            await this.sendBut(m.chat, `*Benar!* +${this.tebakjenaka[id][2]} XP`, `By Lui`, 'Tebak jenaka', '.tebakjenaka', m)
            clearTimeout(this.tebakjenaka[id][3])
            delete this.tebakjenaka[id]
        } else if (similarity(m.text.toLowerCase(), json.result.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler