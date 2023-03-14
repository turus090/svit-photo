const express = require('express')
const router = express.Router()
const controller = require('../controllers/review')

router.post('/create', controller.Create)
router.get('/list', controller.List)

module.exports = router