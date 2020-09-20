const crawl = require('../services/crawler')

module.exports = {
  crawl: async (req, res) => {
    const result = await crawl('https://transfonter.org/')
    res.json({
      status: 200,
      message: 'Crawl in progress',
      result,
    })
  },
}
