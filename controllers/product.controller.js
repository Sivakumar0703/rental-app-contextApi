const productRouter = require("express").Router();
const productModel = require("../models/products.model");

/*

get all product
add new product
get product by id

*/

//get

productRouter.get("/", async(req, res, next) => {
    try {
        let products = await productModel.find();
        res.status(200).json({products,message:"all product data are fetched"})
    } catch (error) {
        res.status(400).json({message:"not able to get product data",error})
    }
});

// 9-5-23 get product by id

productRouter.post("/getProductById", async(req, res, next) => {

    const productId = req.body.productId
    try {
        let product = await productModel.findOne({_id:productId});
        res.status(200).json({product,message:" product data are fetched"})
    } catch (error) {
        res.status(400).json({message:"not able to get product data",error})
    }
});









// post => add new product

productRouter.post("/addProducts", (req, res, next) => {

    const { name, type, price, count } = req.body;

    const newProduct = new productModel({

        name: name,
        type: type,
        price: price,
        count: count

    });

    newProduct.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    message:"product added successfully",
                    data : response
                })
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error : "error in adding product"
            })
        })

  //  console.log("request body :",req.body);
 
});

// put - update 

productRouter.put('/:id', async(req,res,next) => {
    try {
        let products = await productModel.findOne({_id:req.params.id})
        if(products){
            products.name = req.body.name
            products.type = req.body.type
            products.price = req.body.price
            products.count = req.body.count

            await products.save()

            res.status(200).json({message:"product updated"})
        }
    } catch (error) {
        res.status(500).json({message:"product doen't exists",error})
        console.log(error);
    }
})



module.exports = productRouter;