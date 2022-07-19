let handler = async(m, { conn, text }) => {
if (!text) throw `Masukkan query!`
              awikwok = `Usiaku 22 tahun. Aku sangat mencintai ${text}, aku punya semua Figurine dan wallpapernya. Aku berdoa setiap malam dan berterima kasih atas segala hal yang telah ia berikan kepadaku. "${text} adalah cinta" aku bilang "${text} adalah Tujuan Hidupku". Temanku datang ke kamarku dan berkata "HALU LU ANJING !!". Aku tau dia cemburu atas kesetiaanku kepada ${text}. Lalu kukatakan padanya "BACOT NJING !!". Temanku menampol kepalaku dan menyuruhku untuk tidur. Kepalaku sakit dan aku menangis. Aku rebahan di kasur yang dingin, lalu ada sesuatu yang hangat menyentuhku. Ternyata ${text} datang ke dalam kamarku, Aku begitu senang bertemu ${text}. Dia membisikan ke telingaku, "Kamu adalah impianku" Dengan tangannya dia meraih diriku. Aku melebarkan pantatku keatas demi ${text}. Dia menusukan sesuatu kedalam Anggusku. begitu sakit, tapi kulakukan itu demi ${text}. Aku ingin memberikan kepuasan kepada ${text}. Dia meraum bagaikan singa, disaat dia melepaskan cintanya kedalam Anggusku. Temanku masuk kekamarku dan berkata "....... Anjing". ${text} melihat temanku dan berkata " Semua sudah berakhir" Dengan menggunakan kemampuannya Stellar Restoration ${text} pergi meninggalkan kamarku. "${text} itu cinta" "${text} itu kehidupan".`
           conn.send3Button(m.chat, awikwok, wm, `Wangy`, `.wangy ${text}`, `Nenen`, `.nenen ${text}`, `Simp`, `.simp ${text}`, fdocs)
}
handler.help = ['sherk <pasangan>']
handler.tags = ['fitnah']
handler.command = /^(sherk)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
