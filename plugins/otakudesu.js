//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
 if (!text) throw `Masukan Judul anime nya !`
  let res = await require("../lib/scrape").otakudesu(text)
  let json = await require("yuzzu-api").otaku(text)
 conn.send2ButtonDoc(m.chat, `${json.result.judul}\n${json.result.produser}\n${json.result.studio}\n${json.result.rating}\n${json.result.status}`, `${json.result.rilis}`, `Owner 🥶🥶`, `.owner`, `Sumbangan 😥`, `.donate`, fkontak,{
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${res[0].link}`,
    mediaType: 2,
    description: `Ok` , 
    title: `${res[0].judul}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await(await fetch(json.result.thumb)).buffer(),
    sourceUrl: `${res[0].link}`
     }}
  })
} 

handler.help = ['otakudesu <text>']
handler.tags = ['anime', 'internet']
handler.command = /^(otakudesu)$/i


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

module.exports = handler