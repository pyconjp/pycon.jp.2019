const functions = require('firebase-functions')
const cors = require('cors');
const basicAuth = require('basic-auth-connect')
const express = require('express')
const axios = require("axios")
const { parseString } = require('xml2js')

const app = express()

/* Hosting */

if(["pyconjp-2019-development", "pyconjp-2019-branch"].includes(process.env.GCLOUD_PROJECT)){
    app.all('*', basicAuth(function(user, password) {
        return user === 'pycon' && password === 'pyconpycon';
    }));
}
app.use(express.static(__dirname + '/dist/'))
exports.app = functions.https.onRequest(app)

/* Functions */

const api = express()
api.use(cors({
    origin: true,
    allowedHeaders: ["Authorization", "Content-Type"]
}));

api.get("/news", async (req, res) => {
    const maxResult = req.query.maxResult || 5
    const url = `http://pyconjp.blogspot.com/feeds/posts/default/-/pyconjp2019?alt=rss&max-results=${maxResult}`
    const resp = await axios.get(url)
    parseString(resp.data, (err, result) => {
        const posts = result.rss.channel
        res.json(posts)
    })
});
exports.api = functions.https.onRequest(api)