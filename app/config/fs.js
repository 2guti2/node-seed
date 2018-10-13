const fsreader = {}
const fs = require('fs')
const path = require('path')

fsreader.getPort = (callback) => {
  let file = path.join(__dirname, './settings.json')
  fs.readFile(file, (err, rawdata) => {
    if (err) throw err

    let json = JSON.parse(rawdata)
    callback(json.port)
  })
}

module.exports = fsreader
