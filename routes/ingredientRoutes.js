const express = require('express');
const Ingredient = require('../models/ingredient'); 
const router = express.Router();

router.get('/ingredients', async(req, res) => { 
    try {
        const ingredients = await Ingredient.find();
        res.json(ingredients);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

router.post('/ingredient', async (req, res) => {
    const ingredientObject = new Ingredient({ 
        productId: req.body.productId,
        name: req.body.name,
        category: req.body.category,
        product: req.body.product,
        brand: req.body.brand,
        size: req.body.size,
        sizeUnit: req.body.sizeUnit,
        price: req.body.price,
        availableUnits: req.body.availableUnits,
        supplier: req.body.supplier
    });

    try {
        const newIngredient = await ingredientObject.save();
        res.status(201).json(newIngredient); 
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
module.exports = router;
