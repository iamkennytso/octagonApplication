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

app.get('/getYoutube', (req, res) => {
  axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: process.env.YOUTUBE_KEY,
      channelId:'UCrPCP1oaOr0AEs2JdxzfOFA',
      part:'snippet',
      order:'date',
      maxResults:4
    }
  })
    .then(yt=> {
      const arr = []
      for (let i = 0; i < yt.data.items.length; i++){
        let obj = {}
        obj.URL = yt.data.items[i].id.videoId
        obj.title = yt.data.items[i].snippet.title
        obj.thumb = yt.data.items[i].snippet.thumbnails.medium.url
        arr.push(obj)
      }
      res.send(arr)
    })
})

app.post('/contactForm', (req, res) => {
  //not sure what database this is supposed to be formatted for, just sending it to the backend for now
  console.log('First Name: ' && req.body.firstName)
  console.log('Last Name: ' && req.body.lastName)
  console.log('E-Mail Address: ' && req.body.email)
  console.log('State: ' && req.body.state)
  console.log('Zip Code: ' && req.body.zip)
  res.send('Data was received!')
})