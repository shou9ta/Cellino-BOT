async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://api.zacros.my.id/randomimg/darkjokes`, '', `Gelap?`, m)
    
    }
    
    handler.help = ['Darkjokes', 'darkmeme']
    
    handler.tags = ['internet', 'fun']
    
    handler.command = /^(darkjokes)$/i
    
    handler.owner = false
    
    handler.mods = false
    
    handler.premium = false
    
    handler.group = false
    
    handler.private = false
    
    handler.limit = true

    
    handler.admin = false
    
    handler.botAdmin = false
    
    
    
    handler.fail = null
    
    
    
    module.exports = handler
