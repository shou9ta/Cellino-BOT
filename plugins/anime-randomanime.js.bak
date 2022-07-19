let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('tunggu...')
  let res = await (await fetch(`https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/${command}.json`)).json()
  let anjime = res[Math.floor(Math.random() * res.length)]
  await conn.sendButtonImg(m.chat, anjime, 'cuih 2d', `ini wm`, 'Lagi banh', `${usedPrefix + command}`, m, false)
}
handler.help = ['waifu2', 'shota', 'yotsuba', 'shinomiya', 'yumeko', 'tejina', 'chiho', 'boruto', 'kaori', 'shizuka', 'kaga', 'kotori', 'mikasa', 'akiyama', 'gremory', 'isuzu', 'shina', 'kagura', 'shinka', 'eba', 'elaina', 'erza', 'hinata', 'minato', 'naruto', 'sagiri', 'nezuko', 'rize', 'ana', 'deidara', 'yuki', 'asuna', 'ayuzawa', 'chitoge', 'emilia', 'hestia', 'inori', 'itachi', 'madara', 'sakura', 'sasuke', 'tsunade', 'onepiece', 'mobil', 'montor', 'keneki', 'toukachan', 'akira', 'itori', 'kurumi', 'loli', 'pokemon']
handler.tags = ['random']
handler.command = /^(waifu2|shota|yotsuba|shinomiya|yumeko|tejina|chiho|boruto|kaori|shizuka|kaga|kotori|mikasa|akiyama|gremory|isuzu|shina|kagura|shinka|eba|elaina|erza|hinata|minato|naruto|sagiri|nezuko|rize|ana|deidara|yuki|asuna|ayuzawa|chitoge|emilia|hestia|inori|itachi|madara|sakura|sasuke|tsunade|onepiece|mobil|montor|keneki|toukachan|akira|itori|kurumi|loli|pokemon)$/i
handler.register = true

handler.limit = true

module.exports = handler

let wm = global.wm



//thanks to rey 
