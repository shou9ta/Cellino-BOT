let handler = async (m, { conn, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!text) throw 'No Text'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => ''),
    comment: text,
    username: conn.getName(who)
  }), 'yt-comment.png', 'Here is your comment', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['nulis', 'fun']

handler.command = /^(ytcomment)$/i

module.exports = handler
