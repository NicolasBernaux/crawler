const express = require('express')
const router = express.Router()

const apiV1 = require('./routes')

router.use('/v1', apiV1)

router.get('/:version/', (req, res, next) => {
  res.sendStatus(404)
})

module.exports = router
