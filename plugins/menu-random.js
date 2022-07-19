let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix }) => {
         let judul = 'Hi '
        const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `By AhmdLui 🥶🥶`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
      const sections = [
      {
        title: 'Random Image Anim 🎌️',
        rows: [
          { title: 'Waifu', rowId: `${usedPrefix}waifu` },
          { title: 'Waifu2', rowId: `${usedPrefix}waifu2` },
          { title: 'Shouta', rowId: `${usedPrefix}shota` },
          { title: 'Yotsuba', rowId: `${usedPrefix}yotsuba` },
          { title: 'Shinomiya', rowId: `${usedPrefix}shinomiya` },
          { title: 'Yumeko', rowId: `${usedPrefix}yumeko` },
          { title: 'Tejina', rowId: `${usedPrefix}tejina` },
          { title: 'Chiho', rowId: `${usedPrefix}chiho` },
          { title: 'Boruto', rowId: `${usedPrefix}boruto` },
          { title: 'Kaori', rowId: `${usedPrefix}kaori` },
          { title: 'Shizuka', rowId: `${usedPrefix}shizuka` },
          { title: 'Kaga', rowId: `${usedPrefix}kaga` },
          { title: 'Kotori', rowId: `${usedPrefix}kotori` },
          { title: 'Mikasa', rowId: `${usedPrefix}mikasa` },
          { title: 'Akiyama', rowId: `${usedPrefix}akiyama` },
          { title: 'Gremory', rowId: `${usedPrefix}gremory` },
          { title: 'Isuzu', rowId: `${usedPrefix}isuzu` },
          { title: 'Shina', rowId: `${usedPrefix}shina` },
          { title: 'Kagura', rowId: `${usedPrefix}kagura` },
          { title: 'Shinka', rowId: `${usedPrefix}shinka` },
          { title: 'Eba', rowId: `${usedPrefix}eba` },
          { title: 'Elaina', rowId: `${usedPrefix}elaina` },
          { title: 'Erza', rowId: `${usedPrefix}erza` },
          { title: 'Hinata', rowId: `${usedPrefix}hinata` },
          { title: 'Minato', rowId: `${usedPrefix}minato` },
          { title: 'Naruto', rowId: `${usedPrefix}naruto` },
          { title: 'Sagiri', rowId: `${usedPrefix}Sagiri` },
          { title: 'Nezuko', rowId: `${usedPrefix}nezuko` },
          { title: 'Rize', rowId: `${usedPrefix}rize` },
          { title: 'Ana', rowId: `${usedPrefix}ana` },
          { title: 'Deidara', rowId: `${usedPrefix}deidara` },
          { title: 'Yuki', rowId: `${usedPrefix}yuki` },
          { title: 'Asuna', rowId: `${usedPrefix}Asuna` },
          { title: 'Ayuzawa', rowId: `${usedPrefix}Ayuzawa` },
          { title: 'Chitoge', rowId: `${usedPrefix}chitoge` },
          { title: 'Emilia', rowId: `${usedPrefix}emilia` },
          { title: 'Hestia', rowId: `${usedPrefix}Hestia` },
          { title: 'Inori', rowId: `${usedPrefix}Inori` },
          { title: 'Itachi', rowId: `${usedPrefix}Itachi` },
          { title: 'Madara', rowId: `${usedPrefix}madara` },
          { title: 'Sasuke', rowId: `${usedPrefix}sasuke` },
          { title: 'Sakura', rowId: `${usedPrefix}isakura` },
          { title: 'Tsunade', rowId: `${usedPrefix}shina` },
          { title: 'One Piece', rowId: `${usedPrefix}onepiece` },
          { title: 'Kaneki', rowId: `${usedPrefix}keneki` },
          { title: 'ToukaChan', rowId: `${usedPrefix}toukachan` },
          { title: 'Akira', rowId: `${usedPrefix}akira` },
          { title: 'Kurumi', rowId: `${usedPrefix}kurumi` },
          { title: 'Itori', rowId: `${usedPrefix}itori` },
          { title: 'husbu', rowId: `${usedPrefix}husbu` },          
          { title: 'Loli', rowId: `${usedPrefix}loli` },
          { title: 'Pokemon', rowId: `${usedPrefix}pokemon` },
          
                    
        ]
},
      {
        title: 'Random Image & Video Meme 😂️',
        rows: [
          { title: 'Image Meme', rowId: `${usedPrefix}meme` },
          { title: 'Meme Video', rowId: `${usedPrefix}mememp4` },
          { title: 'Dark Jokes', rowId: `${usedPrefix}darkjokes` },
          { title: 'Dark Meme', rowId: `${usedPrefix}darkmeme` },
        ]
},

      {
        title: 'Random Asupan 🥵',
        rows: [
          { title: 'Asupan', rowId: `${usedPrefix}asupan` },
          { title: 'Indonesia', rowId: `${usedPrefix}indonesia` },
          { title: 'Malaysia', rowId: `${usedPrefix}malaysia` },
          { title: 'Thailand', rowId: `${usedPrefix}thailand` },
          { title: 'Vietnam', rowId: `${usedPrefix}vietnam` },
          { title: 'China', rowId: `${usedPrefix}china` },
          { title: 'Korea', rowId: `${usedPrefix}korea` },
          { title: 'Japan', rowId: `${usedPrefix}japan` },          
        ]
},

      {
        title: 'Random Hentai 🔞️',
        rows: [
          { title: 'Ass', rowId: `${usedPrefix}ass` },
          { title: 'Bdsm', rowId: `${usedPrefix}bdsm` },
          { title: 'Blowjob', rowId: `${usedPrefix}blowjob` },
          { title: 'Boobjob', rowId: `${usedPrefix}boobjob` },
          { title: 'Cum', rowId: `${usedPrefix}shinomiya` },
          { title: 'Creampie', rowId: `${usedPrefix}creampie` },
          { title: 'Ero', rowId: `${usedPrefix}ero` },
          { title: 'Elves', rowId: `${usedPrefix}elves` },
          { title: 'Femdom', rowId: `${usedPrefix}femdom` },
          { title: 'foot', rowId: `${usedPrefix}foot` },
          { title: 'GangBang', rowId: `${usedPrefix}gangbang` },
          { title: 'Glasses', rowId: `${usedPrefix}glasses` },
          { title: 'Hentai', rowId: `${usedPrefix}hentai` },
          { title: 'Incest', rowId: `${usedPrefix}incest` },
          { title: 'Masturbation', rowId: `${usedPrefix}Masturbation` },
          { title: 'Pantsu', rowId: `${usedPrefix}pantsu` },
          { title: 'Orgy', rowId: `${usedPrefix}orgy` },
          { title: 'Tentacles', rowId: `${usedPrefix}tentacles` },
          { title: 'Thighs', rowId: `${usedPrefix}thighs` },
          { title: 'Uniform', rowId: `${usedPrefix}uniform` },
          { title: 'Vagina', rowId: `${usedPrefix}Vagina` },
          { title: 'Yuri', rowId: `${usedPrefix}yuri` },
                              
        ]
},

      {
        title: 'Random Kendaraan 😅️',
        rows: [
          { title: 'Mobil', rowId: `${usedPrefix}mobil` },
          { title: 'Motor', rowId: `${usedPrefix}motor` },
         ]
}

    ]
    const listMessage = {
      text: `
Nih!!`,
      footer: `sebagian tidak bisa di gunakan di grup karena berbau dewasa`,
      title: ``,
      buttonText: "Klik here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})

}
handler.help = ['randommenu']
handler.tags = ['main']
handler.command = /^(randommenu)$/i
handler.register = true
handler.limit = true

module.exports = handler
let wm = global.wm
