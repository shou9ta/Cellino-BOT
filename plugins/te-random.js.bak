const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, participants, command, text }) => {
    let who
    if (!m.isGroup) who = m.sender
    else {
        let member = participants.map(u => u.id)
        who = member[Math.floor(Math.random() * member.length)]
    }
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + `N:;${command};;;`
                    + `FN:${command}\n` // full name
                    + 'URL;Web gwejh: doujindesu.xxx\n'
                    + `EMAIL;Ada orang ${command}: Hati Hati dia ${command}\n`
                    + `ORG:${command};\n` // the organization of the contact
                    + `TEL;type=CELL;type=VOICE;waid=${who.replace(/@.+/, '')}:${who.replace(/@.+/, '')}\n` // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Lol Animals', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['sangean', 'lesbi', 'gay', 'cantik', 'ganteng', 'goblok', 'tolol', 'gila', 'pintar', 'sultan', 'bocil', 'om-om', 'bodoh']
handler.tags = ['fitnah']
handler.command = /^(sangean|lesbi|gay|cantik|ganteng|goblok|tolol|gila|pintar|sultan|bocil|om-om|bodoh)$/i

handler.group = true

module.exports = handler