const express = require('express')
const app = express()
const data = require('../data/index.js')

const path = require('path')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/mean', (req, res) => {
    res.send('good')
})
router.get('/blog/:id', (req, res) => {

  mydata = data.filter((e) => {
        return e.id == req.params.id;
    })
    console.log(mydata)
    res.render('datapage', {
    state:mydata[0].state,
    Condition:mydata[0].Condition,
    status:mydata[0].status
    })
})

router.get('/blog', (req, res) => {
    res.render('blog', {
        images: data
    })
})


module.exports = router;