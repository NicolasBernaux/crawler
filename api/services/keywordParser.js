const sw = require('stopword')

module.exports = async ({ body, title, h1, h2, lang }) => {
  const _lang = lang.replace(/-[A-Z]*$/, '') || 'fr'
  const _text = `${body} ${title.repeat(6)} ${h1.repeat(5)} ${h2.repeat(2)}`
    .toLowerCase()
    .replace(/(\r\n|\n|\r)/gm, ' ') // remove breakline
    .replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+\\]/gm, ' ') // remove ponctuation
    .replace(/\s\d+\s/gm, ' ') // remove string equal to numbers
    .replace(/\s[a-z]\s/gm, ' ') // remove unique letters
    .split(' ')

  const swText = await sw.removeStopwords(_text, sw[_lang])

  const sorted = {}
  swText.forEach(function (word) {
    sorted[word] = (sorted[word] || 0) + 1
  })

  if (sorted['']) delete sorted['']

  const result = Object.entries(sorted).sort((a, b) => b[1] - a[1])

  return result
}
