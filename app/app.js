const Routes = require('./routes')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const methodOverride= require('method-override')
// const path = require('path')
const port = 3000

app.use(express.urlencoded({ extended: false }));
app.set('view engine','ejs')
app.use(methodOverride('_method'))
app.use('/', Routes);

// app.use('/css', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/css')))
// app.use('/js', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/js')))
// app.use('/js', express.static(path.join(_dirname, 'node_modules/jquery/dist')))

// app.get
// ('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views/index.html'))
// }) 

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
