const cartRouter = require("express").Router();
const cartModel = require('../models/cart.model');

//get all carts
cartRouter.get('/',async(req,res)=>{
    try {
        let cart = await cartModel.find();
        res.status(200).json({message:"cart item",cart})
    } catch (error) {
        res.status(400).json({message:"cart items not found",error})
    }
})

// put - update cart

// cartRouter.put('/:id',async(req,res)=>{
//     try {
//         let carts = await cartModule.
//     } catch (error) {
        
//     }
// })


// fsd 3 - 02:42:00
cartRouter.post('/createCart', async (req, res, next) => {
    const {
       // productId,
        userId,
        cartItems,
        quantity,
        //cartTotal,
        createdOn
    } = req.body;

    let total = 0;

    //02.41.30 - no user & product id
    

    if (cartItems.length > 0) {
        cartItems.forEach((product) => {
            total += product.price * product.quantity;
        })
    } else {
        res.status(401).json({
            message: "cart is empty",
        });
    }

    const newCart = new cartModel({
       // productId,
        userId,
        cartItems,
        quantity,
        cartTotal:total,
        createdOn
    })

    newCart.save()
    .then((response) => {
        if(response && response._id){
            return res.status(200).json({
                message:"cart created",
                data:response
            })
        }
    }).catch((err) => {
        return res.status(401).json({
           message:"error in cart",
           error:err 
        })
    })
})

// update cart | id=645215c46354f48e754d53c3(cart id)

cartRouter.put('/:id', async(req, res, next) => {
    const {cartItems} = req.body;

    let total = 0;

    if (cartItems.length > 0) {
        cartItems.forEach((product) => {
            total += product.price * product.quantity;
        })
    } else {
        res.status(401).json({
            message: "cart is empty",
        });
    }
/*
    const newCart = new cartModel({
       // productId,
        userId,
        cartItems,
        quantity,
        cartTotal:total,
        createdOn
    }) */
//2:57:00



    // cartModel.updateOne({_id:cartId},{cartItems,cartTotal:total,updatedOn:Date.now()})
    // .then((response) => {
    //     if(response && response._id){
    //         return res.status(200).json({
    //             message:"cart created",
    //             data:response
    //         })
    //     }
    // }).catch((err) => {
    //     return res.status(401).json({
    //        message:"error in cart",
    //        error:err 
    //     })
    // })

    try {
    let cart = await cartModel.findOne({_id:req.params.id})
    if(cart){
        cart.cartItems = req.body.cartItems
        cart.cartTotal = total
        cart.updatedOn = Date.now()

        await cart.save()

        res.status(200).json({message:"cart updated successfully",cart})
    }
} catch (error) {
            res.status(200).json({message:"cart update failed",error})
   
}
})









module.exports = cartRouter;