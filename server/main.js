const express = require('express');
const bodyParser = require('body-parser')
const compress = require('compression')
const axios = require('axios')
const env = require('dotenv').config();

let app = express();
let port = process.env.PORT || 1203

app.use(express.static(__dirname + '/../public'));
app.use(compress())
app.use(bodyParser.json())
app.listen(port, function() {
	console.log(`<('.'<) Server's up on port 1203!`);
})

app.get('/getYoutube', (req, out) => {
  axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: process.env.YOUTUBE_KEY,
      channelId:'UCrPCP1oaOr0AEs2JdxzfOFA',
      part:'snippet',
      order:'date',
      maxResults:4
    }
  })
    .then(res=> {
      const arr = []
      for (let i = 0; i < res.data.items.length; i++){
        let obj = {}
        obj.URL = res.data.items[i].id.videoId
        obj.title = res.data.items[i].snippet.title
        obj.thumb = res.data.items[i].snippet.thumbnails.medium.url
        arr.push(obj)
      }
      out.send(arr)
    })
})