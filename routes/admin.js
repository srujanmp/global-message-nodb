const express=require("express");
const router=express.Router();
const path = require('path');

const products=[];
const rootDir=require('../util/path');


router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir, '/views/add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
    products.push({'title':req.body.title});
    res.redirect("/");
});

exports.route=router;
exports.products=products;