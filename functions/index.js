const functions = require('firebase-functions')
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