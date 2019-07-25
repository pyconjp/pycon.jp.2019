const functions = require('firebase-functions')

/* Hosting */

const basicAuth = require('basic-auth-connect')
const express = require('express')

const app = express()

if(process.env.GCLOUD_PROJECT === "pyconjp-2019-development"){
    app.all('/*', basicAuth(function(user, password) {
        return user === 'pycon' && password === 'pyconpycon';
    }));
}

app.use(express.static(__dirname + '/dist/'))

exports.app = functions.https.onRequest(app)

/* Functions */

const axios = require("axios")
const { parseString } = require('xml2js')

exports.news = functions.https.onRequest(async (req, res) => {
    const maxResult = req.query.maxResult || 5
    const url = `http://pyconjp.blogspot.com/feeds/posts/default/-/pyconjp2018?alt=rss&max-results=${maxResult}`
    const resp = await axios.get(url)
    parseString(resp.data, (err, result) => {
        const posts = result.rss.channel
        res.json(posts)
    })
});