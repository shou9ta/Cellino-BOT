let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let jimp = require('jimp')
let PhoneNumber = require('awesome-phonenumber')
const defaultMenu = {
  before: `
  Hii %name!!
%readmore`.trim(),
  header: '┌─〔 %category 〕',
  body: '├ %cmd %islimit %isPremium',
  footer: '└────\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'rpg', 'xp', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'fitnah', 'asupan', 'internet', 'anonymous', 'anime', 'nulis', 'downloader', 'film', 'cerita', 'jadwal', 'tools', 'fun', '18+', 'vn', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'err', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'UTAMA',
    'game': 'Game',
    'rpg': 'RPG',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'group': 'Grup',
    'premium': 'Premium',
    'fitnah': 'Fitnah & Stres Generator',
    'asupan': 'Asupan',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'anime': 'Anime',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'film': 'Film',
    'cerita': 'Kumpulan Cerpen',
    'jadwal': 'Jadwal Tv DLL',
    'tools': 'Tools',
    'fun': 'Fun',
    '18+': 'Gore & Hentai',
    'vn': 'Sound & Vn', 
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
    'err': 'Fitur Yg Eror',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'RPG'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'fitnah') tags = {
    'fitnah': 'Fitnah & Stres Generator'
  }  
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'asupan') tags = {
    'asupan': 'Asupan'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'film') tags = {
    'film': 'Film'
  }
  if (teks == 'cerita') tags = {
    'cerita': 'Kumpulan Cerpen'
  }    
  if (teks == 'jadwal') tags = {
    'jadwal': 'Jadwal Tv DLL'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == '18+') tags = {
    '18+': 'Gore & Hentai'
  }
  if (teks == 'vn') tags = {
    'vn': 'Sound & Vn'
  }  
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'err') tags = {
    'err': 'Fitut Yg Eror'
  }  
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const hariRaya = new Date('January 1, 2023 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const hariRayaramadan = new Date('April 21, 2023 23:59:59')
    const sekarangg = new Date().getTime()
    const lebih = hariRayaramadan - sekarangg
    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));
    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))
    const detikk = Math.floor( lebih % (1000 * 60) / 1000)
    const ultah = new Date('August 18, 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let pe = '```'
    let { premium, premiumTime } = global.db.data.users[m.sender]
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let judul = `${ucapan()}, ${name}`.trim()
      const fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"NOTE : Jika Ada Fitur Eror tinggal Ketik .report yah","h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
	}     
	 const sections = [
	      {
        title: 'Support Me',
        rows: [
          { title: 'Donasi', rowId: `${_p}gcbott`, description: `Jangan Lupa Support Saya Dengan Cara Donasi XD`},
        ]
      },
      {
        title: 'By AhmdLui️',
        rows: [
          { title: 'Semua Perintah', rowId: `${_p + command} all`, description: `Memunculkan Semua Perintah Yg Ada di Bot`},
          { title: 'Game', rowId: `${_p + command} game`, description: `Menu Mini Game yang seru loh!`},
          { title: 'Rpg', rowId: `${_p + command} rpg`, description: `Gak kalah serunya Dari fitur mini game kami fitur rpg atau roleplay ini juga sangat bagus dan seru loh`},
          { title: 'XP', rowId: `${_p + command} xp`, description: `Fitur Disini Hanya Untuk tambahin atau untuk meperbagus fitur di mini gama dan rpg menu`},
          { title: 'Stiker', rowId: `${_p + command} stiker`, description: `Fitur Ini paling sering di gunakan untuk membuat stiker dan lain-lain` },
          { title: 'Kerang Ajaib', rowId: `${_p + command} kerangajaib`, description: `Menu Kerang Ajaib Seperti Di kartun Spongebob ` },
          { title: 'Quotes', rowId: `${_p + command} quotes`, description: `Disini Berisikan fitur Kata Kata` },
          { title: 'Grup', rowId: `${_p + command} grup`, description: `Fitur ini hanya untuk grup atau melindungi grup`},
          { title: 'Premium', rowId: `${_p + command} premium`, description: `Hanya untuk Member Elite Bot`},
          { title: 'Fitnah & Stres Generator', rowId: `${_p + command} fitnah`, description: `Di fitur ini hanya untuk Have fun aja Fitnah nya yah karna Fitnah Lebih Kejam Dari pada pembunuhan Loh`},          
          { title: 'Asupan', rowId: `${_p + command} asupan`, description: `Fitur ini Berisikan Random Asupan Cecan yg siap membuat anda Full senyum`},
          { title: 'Internet', rowId: `${_p + command} internet`, description: `Di fitur ini Berisikan Tentang pencarian Di lautan Internet`},
          { title: 'Anonymous', rowId: `${_p + command} anonymous`, description: `Di sini Kalian Bisa berkenalan atau beinstraksi dengan pengguna Bod lainnya loh`},
          { title: 'Anime', rowId: `${_p + command} anime`, description: `Hanya Untuk Ras Wibu`},
          { title: 'Nulis & Logo', rowId: `${_p + command} nulis`, description: `Menu Nulis`},
          { title: 'Downloader', rowId: `${_p + command} downloader`, description: `Di fitur ini kalian bisa mendowload video atau gambar dari beragam platform dengan menggunakan link`},
          { title: 'Kumpulan Cerpen', rowId: `${_p + command} cerita`, description: `Di fitur ini hanya untuk kaum kutu buku`},
          { title: 'Film', rowId: `${_p + command} film`, description: `Ada yg suka Film ? Yuk coba di lihat fitur menarik dari kami`},          
          { title: 'Jadwal Tv DLL', rowId: `${_p + command} jadwal`, description: `Fitur ini berisikan tentang Jadwal Harian Anda yg bisa di publik,di internet`},
          { title: 'Tools', rowId: `${_p + command} tools`, description: `Pengaturan atau bantuan Menu`},
          { title: 'Fun', rowId: `${_p + command} fun`, description: `Hanya fitur Untuk Besenang senang ajah`},
          { title: 'Gore & Hentai', rowId: `${_p + command} 18+`, description: `Anak di bawah umur di larang klik list ini di karenakan berisi konten dewasa dan gore yg membuat kalian kena mental`},
          { title: 'Sound & Vn', rowId: `${_p + command} vn`, description: `Ada vn desah nya loh :v`},          
          { title: 'Database', rowId: `${_p + command} database`, description: `Menu database`},
          { title: 'Vote & Absen', rowId: `${_p + command} vote`, description: `Vote di grup untuk penentuan dalam suatu pemilihan yg di laksanakan di grup`},
          { title: "Al-Qur\'an & Islami", rowId: `${_p + command} quran`, description: `Stay Halal Brother`},
          { title: 'Pengubah Suara', rowId: `${_p + command} audio`, description: `Filter edit file audio maupun vn`},
          { title: 'Jadi Bot', rowId: `${_p + command} jadibot`, description: `GAK PENTING`},
          { title: 'Info', rowId: `${_p +command} info`, description: `sekedar ingfo`},
          { title: 'Tanpa Kategori', rowId: `${_p + command} tanpakategori`, description: `Disini tempat fitur yg biasanya dalam tahap uji coba`},
        ]
      },
      
     {
        title: '️Trimakasih untuk Segenap Team Pembuat Script Bot ini',
        rows: [
          { title: 'Thanks To', rowId: `${_p}tqto`, description: `Terimakasih untuk Bahannya` },
        ]
      },            
        {
        title: '️Gk Penting ini',
        rows: [
          { title: 'Script Bot', rowId: `${_p}sc`, description: `Sc gw jelek kids cari yang di yt lebih bagus` },
          { title: 'Owner', rowId: `${_p + command} owner`, description: `Jangan Lupa sv no owner Yah` },
        ]
      }
    ]
    const listMessage = {
      text: `Jangan Lupa makan Dan juga ${alarmsolat()}\n
❏ 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍
» Nama : ${name}
» Uang : ${money}
» Limit : ${limit} 
» Premium : ${premium ? '✅' : '❌'}

❏ 𝙏𝙄𝙈𝙀
» Wib : ${time}
» Tanggal : ${week} ${weton} ${date}

❏ 𝙏𝘼𝙃𝙐𝙉 𝘽𝘼𝙍𝙐
_${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik_

❏ 𝙍𝘼𝙈𝘼𝘿𝘼𝙉
_${harii} Hari ${jamm} Jam ${menitt} Menit ${detikk} Detik_

❏ 𝙐𝙇𝘼𝙉𝙂 𝙏𝘼𝙃𝙐𝙉 𝙊𝙒𝙉𝙀𝙍
_${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik_

Note: Jika ada Fitur yg Error Lapor ke owner
`,
      footer: `AhmdLui 🥶🥶`,
      title: judul,
      buttonText: "Klik here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fliveLoc, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? ' *Ⓛ* ' : '')
                .replace(/%isPremium/g, menu.premium ? ' *Ⓟ* ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
          const fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"NOTE : Jangan Di spam️","h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
	} 
 await conn.send2ButtonDoc(m.chat, text.trim(), wm, `Owner 🥶🥶`, `.owner`, `Sumbangan 😥`, `.donate`, fkontak,{
  contextInfo: { externalAdReply :{
    mediaUrl: linkig,
    mediaType: 2,
    description: deslink , 
    title: titlink,
    body: wm,
    thumbnail: await(await fetch(fla + `${command} ${teks}`)).buffer(),
    sourceUrl: linkgc
     }}
  }) 
 } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
function alarmsolat() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Jangan Lupa Solat subuh Ya!!"
  if (time >= 4) {
    res = "Jangan Lupa Solat subuh Ya!!"
  }
  if (time > 9) {
    res = "Jangan Lupa Solat Dhuha Ya!!"
  }
  if (time > 12) {
    res = "Jangan Lupa Solat Dhuhur Ya!!"
  }
  if (time >= 15) {
    res = "Jangan Lupa Solat Ashar Ya!!"
  }
  if (time >= 18) {
    res = "Jangan Lupa solat Maghrib Ya!!"
  }
  if (time >= 19) {
    res = "Jangan Lupa solat Isya Ya!!"
  }
  if (time >= 23) {
    res = "Jangan Lupa solat Sunah Tahajud dan witir Ya!!"
  }
  return res
}

//Makasih fahri adison = https://github.com/FahriAdison
//gwejh cuman edit sedikit :v

 async function genProfile(conn, m) {
  let font = await jimp.loadFont('./name.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(thumbnailUrl.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}
