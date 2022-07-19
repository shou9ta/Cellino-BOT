//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    let res = await fetch(`https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/kisahNabi/${command}.json`)
    let json = await res.json()
    conn.sendButtonImg(m.chat, json.image_url, `Nama Nabi : ${json.name}\nTahun Kelahiran : ${json.thn_kelahiran}\nUsia : ${json.usia}\nTempat : ${json.tmp}\nCerita : ${json.description}`, wm, `Subhanallah`, `ok`, m)
}

handler.command = /^(adam|idris|nuh|hud|shaleh|ibrahim|luth|ismail|ishaq|yaqub|yusuf|ayyub|syuaib|musa|harun|dzulkifli|daud|sulaiman|ilyas|ilyasa|yunus|dzakaria|yahya|isa|muhammad)$/i

handler.limit = true

module.exports = handler