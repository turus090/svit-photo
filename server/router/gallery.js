const express = require('express')
const routerGallery = express.Router()
const ImgModel = require('../Models/img')

routerGallery.post('/create', async (req, res) => {
let newImg = new ImgModel({
    imgSrc: req.body.imgSrc
})
await newImg.save()
.then(() => res.status(201).json('New img has been created'))
.catch(err => res.status(500).json('Error img'))
})

routerGallery.get('/list', async (req, res) => {
    let listImg = await ImgModel.find({})
        if (listImg) {
            res.status(200).json(listImg)
        } else {
            res.status(404).json('Image not found')
        }
})

module.exports = routerGallery