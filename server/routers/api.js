const express = require('express')
const router = express.Router()


const controller = require('../controllers/api')


router.get('/', controller.GetMainPage)


router.get('/list', controller.GetList)

module.exports = router