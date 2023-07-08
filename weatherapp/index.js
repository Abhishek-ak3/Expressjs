const express = require('express')
const app = express()
const port = 3000
const path=require('path');

const expbh=require('express-handlebars')




app.engine('handlebars', expbh.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/',require(path.join(__dirname,'proto/index.js')))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})