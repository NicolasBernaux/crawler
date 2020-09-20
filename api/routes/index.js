const express = require('express')
const router = express.Router()
const CrawlController = require('../controlers/crawl')

router.get('/crawl', CrawlController.crawl)

router.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Welcome on api v1',
  })
})

module.exports = router
