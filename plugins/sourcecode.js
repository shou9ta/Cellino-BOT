let moment = require('moment-timezone')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
//let img1 = fs.readFileSync('./src/img1.png')
//let img2 = fs.readFileSync('./src/img2.png')
let user = global.DATABASE.data.users[m.sender]
/*conn.sendFile(m.chat, img, '', `Halo juga kak ${conn.getName(m.sender)}`, { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/mikey.jpg')
}}})*/
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = m.fromMe ? conn.user : conn.contacts[who]
pushname2 = `*${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*`

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
runtime = process.uptime()
					teks = `The.sad.boy01 ×͜×`// \n\n${kyun(runtime)}`
					run = `${kyun(runtime)}`
					var itsme = `0@s.whatsapp.net`
					var split = `teks`
           const fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"SC : https://github.com/LuiXyz/sc-bot-rpg-md","h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
	}

					//m.reply(teks)
					let jawab = `😅👆\n\n`.trim()
   await conn.send2ButtonDoc(m.chat, jawab, wm, `Own`, `${usedPrefix}owner`, `Sumbangan`, `${usedPrefix}.donasi`, fliveLoc)				
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
