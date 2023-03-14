/*const productModel = require('../Models/product')

module.exports.GetMainPage = (req, res) => {
    res.status(200).json('Router is working')
}


module.exports.GetList = (req, res) => {
    res.status(200).json('List is working')
}

module.exports.CreateProduct = async (req, res) => {
    let newProduct = new productModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        count: req.body.count
    })

    await newProduct.save()
    .then(() => {
        res.status(201).json('New Product created')
})

.catch((err) => {
    res.status(500).json({
        message: err
    }) 
})
}

module.exports.GetProductsList = async (req, res) => {
    let productsList = await productModel.find({})
    if (productsList) {
        res.status(200).json(productsList)
    } else {
        res.status(404).json('No products found')
    }
}

module.exports.GetProductByTitle = async (req, res) => {
    let product = await productModel.findOne({
        name: req.body.name
    })
    if (product) {
        res.status(200).json(product)
    } else {
        res.status(404).json('No product found')
    }
}

module.exports.GetCountProducts = async (req, res) => {
    let countProducts = await productModel.estimatedDocumentCount()
    res.status(200).json({
        ProductCount: countProducts
    })
}

module.exports.ChangeCountProduct = async (req, res) => {
    await productModel.findOneAndUpdate({
        name: req.body.name
    },
    {
        count: req.body.count
    }) .then ( () => {
        res.status(200).json('Product updated')
    }) .catch((err) => {
        res.status(500).json(err)
    })
}

module.exports.DeleteProduct = async (req, res) => {
    await productModel.findOneAndDelete({
        name: req.body.name
    }) .then ( () => {
        res.status(200).json('Product deleted')
    })
    .catch ((err) => {
        res.status(500).json('Error deleting product')
    })
}*/