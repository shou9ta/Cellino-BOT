//Kena mental

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Masukin dlu link nya dari web seegore.com trus klik video yg lu suka trus salin link kirim kesini dengan format .seegore *link*`
    let res = await fetch(`https://kanza-api.herokuapp.com/api/download/goredl?url=${text}&apikey=RiAWMVabXzA2bWi4nZq7weD8J`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    conn.sendFile(m.chat, json.result.link, 'gore.mp4', `Judul : ${json.result.judul}\nDitonton : ${json.result.views}\nJumlah komentar : ${json.result.comment}\n\n\n *Note :* Make Link Ini ${json.result.link}\n Jika ingin Via link`, m)
}
handler.help = ['seegore *link*']
handler.tags = ['18+']
handler.command = /^seegore$/i

handler.private = true
handler.limit = 2

module.exports = handler


