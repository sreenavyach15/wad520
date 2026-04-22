const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const auth = require("../middleware/authMiddleware");

// CREATE
router.post("/", auth, async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

// READ
router.get("/", auth, async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// UPDATE
router.put("/:id", auth, async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(product);
});

// DELETE
router.delete("/:id", auth, async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
});

module.exports = router;