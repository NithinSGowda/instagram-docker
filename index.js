const Instagram = require('instagram-web-api')
require('dotenv').config()
const app = require('express')();

const { username, password } = process.env

const client = new Instagram({ username, password })

app.get('/search/:query', async (req, res) => {
        await client.login()
        const profile = await client.getProfile()
        client.getMediaFeedByHashtag({ hashtag: req.params.query}).then((data)=>{
            res.send(JSON.parse(JSON.stringify(data.edge_hashtag_to_media.edges)))
        })   
})

app.listen(8080, () => console.log(`App is now listening for requests v0.1`));