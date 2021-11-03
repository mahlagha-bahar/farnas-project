const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
  res.render('home',{pageTitle:'خانه', users:[{id:1,name:'ali'}]})
})

app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
})