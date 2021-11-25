const multer = require('multer')
const path  = require('path')

var storageComentarios = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../images/publicaciones'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storageComentarios })

module.exports = upload;