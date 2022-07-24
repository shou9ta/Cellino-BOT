let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.tempatnye = JSON.parse(fs.readFileSync('./src/tempatnye.json'))
global.thumbt = global.img
global.fsx = 999999999999
global.kontak = [
['14157614750', 'AhmdLui 🥶🥶', 'AhmdLui', 'ayonimasangat@gmail.com', true]

]
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.xteam.xyz': 'apivproject',
  'https://melcanz.com': 'Apikeys',
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'http://zekais-api.herokuapp.com': 'zekais',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.wm = 'Bot-Md 𝑩𝒚 Lui-sama'
global.linkgc = 'https://chat.whatsapp.com/CnQV9lNcHuIENb8SQ9CaYP'
global.linkig = 'https://www.instagram.com/ahmdlui'
global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = '@ahmdlui'

global.wait = '_*𝐬𝐞𝐝𝐚𝐧𝐠 𝐝𝐢 𝐩𝐫𝐨𝐬𝐞𝐬 ...*_'
global.eror = '_*мααƒ ѕєяνєя тι∂αк ѕтαвιℓ..*_'

global.pickRandom = pickRandom
const _uptime = process.uptime() * 1000
global.u =  conn.clockString(_uptime)
global.ucapan = ucapan()
global.settings = global.db.data.settings
global.petik = '```'
global.fake = global.fake
global.fkontak = global.fkontak
global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
global.img = pickRandom(global.waifu)
global.fla = pickRandom(global.flaaa)
global.namabot = conn.user.name
global.packname = 'Powered By'
global.author = 'Anjim'
        //Thx To The.sad.boy01 Buat Sc no enc nya
global.wm2 = global.data.namabot + ' ' + global.data.owner
global.colong1 = 'Ciss 📸'
global.colong2 = ''
global.bg = await (await fetch(img)).buffer()
global.time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')


//========Url Template Buttons==========//
global.dtu = '𝑭𝒐𝒍𝒍𝒐𝒘'
global.urlnya = "https://www.instagram.com/ahmdlui"

//============= callButtons ============//
global.dtc = '𝒄𝒂𝒍𝒍 𝒐𝒘𝒏𝒆𝒓'
global.phn = '+62 895-3362-82144'

//========== Tampilan Bot =============//
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      gold: '🪙',
      arloji: '🪙',
      potion: '🥤',
      diamond: '💎',
      
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      
      sampah: '🗑',
      
      armor: '🥼',
      fishingrod: '🎣',
      umpan: '🪱',
      pickaxe: '⛏️',
      sword: '⚔️',
      
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      fox: '🦊',
      kuda: '🐴',
      serigala: '🐺',
      phonix: '🦜',
      centaur: '🐎',
      griffin: '🦅',
      naga: '🐉',
      
      foodpet: '🥩',      
      makananpet: '🍖',

      mangga: '🥭',
      apel: '🍎',
      jeruk: '🍊',
      pisang: '🍌',
      anggur: '🍇',
      
      bibit: '🌾',
      
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
  }

global.thumb = 'https://telegra.ph/file/61f2d6d9694b49a2ce7aa.jpg'

global.flaaa = [
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]

global.waifu = [
   'https://i.ibb.co/DzvjMqb/anjim9.jpg', 
   'https://i.ibb.co/QjgP263/anjim6.jpg',
   'https://i.ibb.co/tH4Twmh/anjim.jpg', 
   'https://i.ibb.co/18GXb97/anjim0.jpg', 
   'https://i.ibb.co/G9j5SK0/anjim10.jpg',
   'https://i.ibb.co/gyjtYpG/anjim11.jpg',
   'https://i.ibb.co/MgSsGHX/anjim12.jpg', 
   'https://i.ibb.co/mRxbbdJ/anjim13.jpg',
   'https://i.ibb.co/7tqLMvk/anjim14.jpg', 
   'https://i.ibb.co/j5sRRRJ/anjim15.jpg', 
   'https://i.ibb.co/LPWx0QR/anjim16.jpg',  
   'https://i.ibb.co/GR9sNtY/anjim18.jpg',  
   'https://i.ibb.co/YQ8Jypb/anjim19.jpg', 
   'https://i.ibb.co/jW9nZ2J/anjim2.jpg', 
   'https://i.ibb.co/DwKrCyd/anjim20.jpg', 
   'https://i.ibb.co/9hb6xSF/anjim21.jpg', 
   'https://i.ibb.co/82ftvZW/anjim22.jpg', 
   'https://i.ibb.co/0VMWxnK/anjim23.jpg', 
   'https://i.ibb.co/fFP4scP/anjim24.jpg', 
   'https://i.ibb.co/NxH9HR0/anjim25.jpg',
   'https://i.ibb.co/hgj7R45/anjim26.jpg', 
   'https://i.ibb.co/KGWQspH/anjim27.jpg', 
   'https://i.ibb.co/K9zYXJT/anjim28.jpg', 
   'https://i.ibb.co/Y7pLnVK/anjim29.jpg',
   'https://i.ibb.co/P9XgfKX/anjim3.jpg', 
   'https://i.ibb.co/PQMy6c6/anjim30.jpg',    
   'https://i.ibb.co/G0V0jCX/anjim31.jpg',  
   'https://i.ibb.co/BBB7XND/anjim32.jpg',   
   'https://i.ibb.co/GC5gycZ/anjim4.jpg',   
   'https://i.ibb.co/yYt3Ty0/anjim5.jpg',  
   'https://i.ibb.co/9ZX08Cg/anjim7.jpg', 
   'https://i.ibb.co/89B4MMd/anjim8.jpg'
]


