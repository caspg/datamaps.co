const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.use(morgan('dev'))

app.use('/css', express.static(path.join(__dirname, '../public/css')))
app.use('/js', express.static(path.join(__dirname, '../public/js')))
app.use('/images', express.static(path.join(__dirname, '../public/images')))

module.exports = app
