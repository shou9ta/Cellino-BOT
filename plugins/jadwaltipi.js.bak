//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Masukan channel tv di bagian ch dan\n abaikan < >`
    let res = await fetch(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${command}`)
    if (!res.ok) throw `Jadwal tv tidak di temukan mungkin kamu salah dalam penulisan channel tv nya 😃👍`
    let json = await res.json()
    conn.sendBut(m.chat, `${json.result}`, 'wm badag', 'Ok', `ok`, m)
}
handler.help = ['antv', 'rcti', 'nettv', 'mnctv', 'indosiar', 'gtv', 'transtv', 'trans7', 'sctv']
handler.tags = ['jadwal']
handler.command = /^antv|rcti|nettv|mnctv|indosiar|gtv|transtv|trans7|sctv$/i



module.exports = handler