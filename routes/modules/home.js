// routes/modules/home.js

const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo
const User = db.User

router.get('/', (req, res) => {
  const UserId = req.user.id
  User.findByPk(UserId)
    .then((user) => {
      if (!user) throw new Error('user not found')

      return Todo.findAll({
        raw: true,
        nest: true,
        where: { UserId } //多重篩選條件
      })
    })
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))
})

module.exports = router