const multer = require('multer')
const path  = require('path')

var storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../images/usuarios'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storageUser })

module.exports = upload;