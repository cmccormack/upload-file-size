const upload = require('multer')()

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.render('uploadform', {title: 'Check File Size'})
  })

  app.post('/submit-file', upload.single('file'), (req, res, next) => {
    if (req.file) {
      const filesize = req.file.size
      res.type('json').send(JSON.stringify({size: filesize}))
    } else {
      res.render('uploadform', {
        title: 'Check File Size',
        error: {
          message: 'Invalid File',
          description: 'Please provide a valid file.'
        }
      })
    }
  })
}