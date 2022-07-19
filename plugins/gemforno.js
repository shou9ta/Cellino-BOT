//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan Nama karakter dari gem forno sebagai teks \n\nContoh : ${usedPrefix + command} keqing`
    let res = await fetch(`https://zekais-api.herokuapp.com/genchar?query=${text}&apikey=5zsP4LAM`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.image, 'gemforno.jpg', `*Nama : ${json.result.name}*    \nVision : ${json.result.vision}    \nSenjata : ${json.result.weapon}    \nHp : ${json.result.base_stats.hp}   \nAttack : ${json.result.base_stats.att}    \nDeff : ${json.result.base_stats.deff}    \nAngka Rare : ${json.result.rarity}    \nLahir : ${json.result.birthday}    \nKarakter rilis : ${json.result.released}    \n_deskripsi : ${json.result.description}_`, m)
}
handler.help = ['genshincharacter *link*']
handler.tags = ['internet', 'anime']
handler.command = /^genshincharacter$/i

handler.register = true

module.exports = handler