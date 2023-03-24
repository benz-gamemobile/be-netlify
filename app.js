const express = require('express')
const dotenv = require('dotenv')

let app = express()

dotenv.config({
  path: "./data/config.env"
})

module.exports = app