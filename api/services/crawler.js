const consola = require('consola')
const CSVExporter = require('headless-chrome-crawler/exporter/csv')
const fs = require('fs')
const HCCrawler = require('headless-chrome-crawler')
const path = require('path')
const url = require('url')

const evaluatePage = require('./evaluatePage')
const fields = require('./fields')

module.exports = async (baseUrl) => {
  const domain = url.parse(baseUrl).hostname
  const protocol = url.parse(baseUrl).protocol
  const date = new Date()
  const timestamp = date.getTime()

  const testPath = path.normalize(`./results/${domain}`)
  if (!fs.existsSync(path)) fs.mkdirSync(testPath, { recursive: true })
  const file = path.normalize(`${testPath}/${domain}-${timestamp}.csv`)
  const exporter = new CSVExporter({
    file,
    fields,
    separator: ';',
  })

  const params = {
    allowedDomains: [domain],
    exporter,
    maxDepth: 10,
    skipRequestedRedirect: true,
    // Function to be evaluated in browsers
    evaluatePage,
    preRequest: (options) => {
      // Images
      if (options.url.match(/\.(jpg|jpeg|png|gif)/i)) return false

      // If ptotocol if different that first page
      if (url.parse(options.url).protocol != protocol) return false

      return true
    },
    customCrawl: async (page, crawl) => {
      // You can access the page object before requests
      await page.setRequestInterception(true)

      let mixedContentUrl = ''

      page.on('request', (request) => {
        // check for mixed content, thanks to https://github.com/busterc/mixed-content-crawler/
        if (
          protocol == 'https:' &&
          ['image', 'stylesheet', 'script'].includes(request.resourceType()) &&
          request.url().match(/^http:/)
        ) {
          request.notHTTPS = true
          mixedContentUrl = request.url()
          return request.abort()
        }
        request.continue()
      })

      // The result contains options, links, cookies and etc.
      const result = await crawl()

      // screenshot
      // result.result.screenshot = `data:image/png;base64,${result.screenshot.toString('base64')}`

      // Mixed content url
      result.result.mixed_content_url = mixedContentUrl
      // You can access the page object after requests
      result.content = await page.content()
      // You need to extend and return the crawled result
      return result
    },
    // Function to be called with evaluated results from browsers
    onSuccess: (result) => {
      if (result.response.status === 200) {
        consola.success(result.response.status, result.response.url)
      } else {
        consola.warn(result.response.status, result.response.url)
      }
    },
  }

  const crawler = await HCCrawler.launch(params)
  // Queue a request
  await crawler.queue(baseUrl, {
    saveAs: path.normalize(`${testPath}/${domain}-${timestamp}.png`),
  })

  await crawler.onIdle() // Resolved when no queue is left
  await crawler.close() // Close the crawler
}
