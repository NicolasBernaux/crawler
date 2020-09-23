const imagemin = require('imagemin')
const imageminPngquant = require('imagemin-pngquant')

module.exports = async (source) => {
  let destination = source.split('/')
  destination.pop()

  try {
    return await imagemin([source], {
      destination: destination.join('/'),
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8],
        }),
      ],
    })
  } catch (e) {
    console.log(e)
  }
}
