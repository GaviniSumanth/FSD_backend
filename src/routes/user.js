const express = require('express')
const db = require('../db')
const unique = require('unique-names-generator')
const User = require('../models/UserModel')
const router = express.Router()
router.post('/getGeneratedName', async (req, res) => {
  while (true) {
    var username = unique.uniqueNamesGenerator({
      dictionaries: [unique.adjectives, unique.starWars],
      style: 'capital',
      separator: ''
    })
    username = username.concat(Math.floor(Math.random() * 10000) + 100)
    username = username.split(' ').join('')
    if (username.length < 32 && username.length > 7) {
      username = username.replace('-', '')
      break
    }
  }
  try {
    res.json(username)
  } catch (error) {
    res.send(error)
  }
})
router.post('/Signin', async (req, res) => {
  //TODO: sign api
  // console.log(req.body)
  // const username = req.body.username
  // const userdata = new User({
  //   username,
  //   email,
  //   hash,
  //   salt
  // })
  // try {
  //   const existingUser = await User.findOne({ username })
  //   if (!existingUser) {
  //     return res.status(400).json({ message: 'Userdata inserted' })
  //   } else {
  //     return res.status(400).json({ message: 'Username already exists' })
  //   }
  // } catch (error) {
  //   res.send(error)
  // }
})
module.exports = router
