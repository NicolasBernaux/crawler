const fs = require('fs')
const fields = require('../data/fieldsFormater')

module.exports = (file) => {
  fs.readFile(file, function (error, data) {
    if (error) {
      console.log(error)
      return
    }
    data = data.toString()

    fields.forEach((field) => {
      data = data.replace(field.name, field.comment)
    })
    fs.writeFile(file, data, (error) => {
      if (error) {
        console.log(error)
      }
    })
  })
}
