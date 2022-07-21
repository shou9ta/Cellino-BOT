//Thx to author scraper xfarr-api Fahar ihsana arifbb dll nya yah saya cuman ambil :v

const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require("axios")
const qs = require("qs")

function quotes(input) {
    return new Promise((resolve, reject) => {
        fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                data = []
                $('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
                    x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
                    y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
                    z = $(element).find('q[class="fbquote"]').text().trim()
                    data.push({ author: x, bio: y, quote: z })
                })
                data.splice(2, 1)
                if (data.length == 0) return resolve({ creator: 'stikerin', status: false })
                resolve({ creator: 'stikerin', status: true, data })
            }).catch(reject)
    })
}

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

function mangatoons(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://mangatoon.mobi/en/search?word=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#page-content > div.search-page > div > div.comics-result > div.recommended-wrap > div > div ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> div.recommend-comics-title > span').text(),
                    genre: $(b).find('> div.comics-type > span').text().trim(),
                    link: 'https://mangatoon.mobi' + $(b).find('> a').attr('href'),
                    thumbnail: $(b).find('> a > div > img').attr('src')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function webtoons(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#content > div.card_wrap.search._searchResult > ul > li ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> a > div > p.subj').text(),
                    like: $(b).find('> a > div > p.grade_area > em').text(),
                    creator: $(b).find('> a > div > p.author').text(),
                    genre: $(b).find('> a > span').text(),
                    thumbnail: $(b).find('> a > img').attr('src'),
                    url: 'https://www.webtoons.com' + $(b).find('> a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function joox(query) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
            .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    lagu: res.msong,
                                    album: res.malbum,
                                    penyanyi: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    mp3: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    creator: "ariffb",
                                    status: true,
                                    data: hasil,
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}

function otakudesu(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://otakudesu.watch/?s=${query}&post_type=anime`).then(({data}) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#venkonten > div > div.venser > div > div > ul > li').each(function (a, b) {
                        result = {
                            status: 200,
                            author: author,
                            judul: $(b).find('> h2 > a').text(),
                            thumbnail: $(b).find('> img').attr('src'),
                            link: $(b).find('> h2 > a').attr('href')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            }).catch(reject)
    })
}

function gore(query) {
    return new Promise(async (resolve, reject) => {
        axios.get('https://seegore.com/?s=' + query).then((dataa) => {
            const $$$ = cheerio.load(dataa)
            pagina = $$$('#main > div.container.main-container > div > div.bb-col.col-content > div > div > div > div > nav > ul > li:nth-child(4) > a').text()
            rand = Math.floor(Math.random() * pagina) + 1
            if (rand === 1) {
                slink = 'https://seegore.com/?s=' + query
            } else {
                slink = `https://seegore.com/page/${rand}/?s=${query}`
            }
            axios
                .get(slink)
                .then(({
                    data
                }) => {
                    const $ = cheerio.load(data)
                    const link = []
                    const judul = []
                    const uploader = []
                    const format = []
                    const thumb = []
                    $('#post-items > li > article > div.content > header > h2 > a').each(function(a, b) {
                        link.push($(b).attr('href'))
                    })
                    $('#post-items > li > article > div.content > header > h2 > a').each(function(c, d) {
                        jud = $(d).text()
                        judul.push(jud)
                    })
                    $('#post-items > li > article > div.content > header > div > div.bb-cat-links > a').each(function(e, f) {
                        upl = $(f).text()
                        uploader.push(upl)
                    })
                    $('#post-items > li > article > div.post-thumbnail > a > div > img').each(function(g, h) {
                        thumb.push($(h).attr('src'))
                    })
                    for (let i = 0; i < link.length; i++) {
                        format.push({
                            judul: judul[i],
                            uploader: uploader[i],
                            thumb: thumb[i],
                            link: link[i],
                        })
                    }
                    format != '' ? resolve({
                        creator: 'Fajar Ihsana',
                        status: true,
                        data: format,
                    }) : resolve({
                        creator: 'Fajar Ihsana',
                        status: false
                    })
                })
                .catch(reject)
        })
    })
}

function porno() {
    return new Promise((resolve, reject) => {
        axios.get('https://tikporntok.com/?random=1')
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = {}
            hasil.title = $('article > h1').text()
            hasil.source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
            hasil.thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            hasil.desc = $('article > div.intro').text()
            hasil.upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
            hasil.like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
            hasil.dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
            hasil.favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
            hasil.views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
            hasil.tags = $('article > div.post-tags').text()
            hasil.video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            resolve(hasil)
        })
    })
}

function hentai() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

function tiktok(url) {
    return new Promise(async (resolve, reject) => {
        axios.get('https://ttdownloader.com/', {
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                let token = $('#token').attr('value')
                let config = {
                    'url': url,
                    'format': '',
                    'token': token
                }
                axios('https://ttdownloader.com/req/', {
                    method: 'POST',
                    data: new URLSearchParams(Object.entries(config)),
                    headers: {
                        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                        "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
                    }
                })
                    .then(({ data }) => {
                        const $ = cheerio.load(data)
                        resolve({
                            nowm: $('div:nth-child(2) > div.download > a').attr('href'),
                            wm: $('div:nth-child(3) > div.download > a').attr('href'),
                            audio: $('div:nth-child(4) > div.download > a').attr('href')
                        })
                    })
            })
            .catch(reject)
    })
}

function ttdown(url) {
    try {
        const tokenn = axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
        let a = cheerio.load(tokenn.data);
        let token = a("#token").attr("value");
        const param = {
            url: url,
            token: token,
        };
        const { data } = axios.request("https://downvideo.quora-wiki.com/system/action.php", {
                method: "post",
                data: new URLSearchParams(Object.entries(param)),
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
                },
            }
        );
        return {
            status: 200,
            author: author,
            title: data.title,
            thumbnail: "https:" + data.thumbnail,
            duration: data.duration,
            media: data.medias,
        };
    } catch (e) {
        return e
    }
}

function twitter(url) {
    return new Promise((resolve, reject) => {
        let params = new URLSearchParams()
        params.append('URL', url)
        fetch('https://twdown.net/download.php', { method: 'POST', body: params })
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res);
                data = []
                $('div.container').find('tbody > tr > td').each(function (index, element) {
                    x = $(this).find('a').attr('href')
                    if (x !== '#') {
                        if (typeof x !== 'undefined') {
                            data.push({ url: x })
                        }
                    }
                })
                if (data.length == 0) return resolve({ status: false })
                resolve({ status: true, data })
            }).catch(reject)
    })
}

function igdl(url) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: 'https://www.instagramsave.com/download-instagram-videos.php',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const token = $('#token').attr('value')
                let config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                    data: {
                        'url': url,
                        'action': 'post',
                        'token': token
                    }
                }
                axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), { headers: config.headers })
                    .then(({ data }) => {
                        resolve(data.medias)
                    })
            })
            .catch(reject)
    })
}

function ssweb(url, device = 'desktop') {
     return new Promise((resolve, reject) => {
          const base = 'https://www.screenshotmachine.com'
          const param = {
            url: url,
            device: device,
            cacheLimit: 0
          }
          axios({url: base + '/capture.php',
               method: 'POST',
               data: new URLSearchParams(Object.entries(param)),
               headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
               }
          }).then((data) => {
               const cookies = data.headers['set-cookie']
               if (data.data.status == 'success') {
                    axios.get(base + '/' + data.data.link, {
                         headers: {
                              'cookie': cookies.join('')
                         },
                         responseType: 'arraybuffer'
                    }).then(({ data }) => {
                        result = {
                            status: 200,
                            author: author,
                            result: data
                        }
                         resolve(result)
                    })
               } else {
                    reject({ status: 404, author: author, message: data.data })
               }
          }).catch(reject)
     })
}

function ssweb2(url, device = 'mobile') {
     return new Promise((resolve, reject) => {
          const base = 'https://www.screenshotmachine.com'
          const param = {
            url: url,
            device: device,
            cacheLimit: 0
          }
          axios({url: base + '/capture.php',
               method: 'POST',
               data: new URLSearchParams(Object.entries(param)),
               headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
               }
          }).then((data) => {
               const cookies = data.headers['set-cookie']
               if (data.data.status == 'success') {
                    axios.get(base + '/' + data.data.link, {
                         headers: {
                              'cookie': cookies.join('')
                         },
                         responseType: 'arraybuffer'
                    }).then(({ data }) => {
                        result = {
                            status: 200,
                            author: author,
                            result: data
                        }
                         resolve(result)
                    })
               } else {
                    reject({ status: 404, author: author, message: data.data })
               }
          }).catch(reject)
     })
}

function textpro(url,text) {
  return new Promise(async(resolve,reject) => {
    if (!/^https:\/\/textpro\.me\/.+\.html$/.test(url)) throw new Error("Url Salah!")
        axios({url: url,
            method: 'get',
            headers: {
                'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
            }
        }).then(da => {
            const $ = cheerio.load(da.data)
            const form = new FormData()
            form.append('text[]',text)
            form.append('submit','Go')
            form.append('token',$('#token').val())
            form.append('build_server',$('#build_server').val())
            form.append('build_server_id',$('#build_server_id').val())
            axios({url: url,
                method: 'POST',
                data: form,
                headers: {
                    'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
                }
    }).then(da =>{
    const $ = cheerio.load(da.data)
    const gdata = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(da.data)
    axios({url: 'https://textpro.me/effect/create-image',
        method: 'POST',
        data: new URLSearchParams(JSON.parse(gdata[1].replace(/\[/g,'').replace(/\]/g,'').replace(/text/g,'text[]').replace(/text\[\]pro\.me/g,'textpro.me'))),
        headers: {
            'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    }).then(a => {
        const result = {
            status: 200,
            author: author,
            result: 'https://textpro.me' + a.data.image
        }
        resolve(result)
    }).catch(reject)
  }).catch(reject)
})
})
}

function igstory(username) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: 'https://www.instagramsave.com/instagram-story-downloader.php',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const token = $('#token').attr('value')
                let config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                    data: {
                        'url': 'https://www.instagram.com/' + username,
                        'action': 'story',
                        'token': token
                    }
                }
                axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), { headers: config.headers })
                    .then(({ data }) => {
                        resolve(data.medias)
                    })
            })
            .catch(reject)
    })
}

function pin(url) {
    return new Promise((resolve, reject) => {
        function rand() {
            return `${Math.floor(Math.random() * 1000000)}`
        }
        let params = new URLSearchParams()
        params.append('url', url)
        fetch('https://www.expertsphp.com/facebook-video-downloader.php', { method: 'POST', body: params })
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                y = 'pinterest_' + rand() + '.mp4'
                x = $('video').find('source').attr('src')
                data = { file: y, url: x }
                if (typeof x == 'undefined') return resolve({ status: false })
                resolve({ status: true, data })
            }).catch(reject)
    })
}

let is = {
    headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    }
}

function _token(host) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: host, method: 'GET', headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let token = $('#token').attr('value')
            resolve(token)
        })
    })
}

function facebook(url) {
    return new Promise(async (resolve, reject) => {
        let host = 'https://aiovideodl.ml/'
        let form = { data: { 'url': url, 'token': (await _token(host)) } }
        axios.post(host + '/system/action.php', qs.stringify(form.data), { headers: is.headers })
            .then(({ data }) => {
                if (data.links.lenght == 0) return resolve({ creator: '@neoxrs – Wildan Izzudin', status: false })
                resolve({ creator: '@neoxrs – Wildan Izzudin', status: true, data: data.links })
            })
    })
}

module.exports = { facebook, porno, mangatoons, webtoons, ssweb, ssweb2, otakudesu, gore, hentai, quotes, quotesAnime, igdl, textpro, igstory, tiktok, ttdown, twitter, joox, pin }
