const express=require("express");
const router=express.Router();
const path=require('path');
const adminData=require('./admin');

const rootDir=require('../util/path');


router.get('/',(req,res)=>{

    const sortedProducts = adminData.products.slice().sort((a, b) => b.title.localeCompare(a.title));

  // Build HTML string
  let htmlString = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Global Messages</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <header class="main-header">
    <nav class="main-header__nav">
      <ul class="main-header__item-list">
        <li class="main-header__item"><a class="active" href="/">Global messager</a></li>
        <li class="main-header__item"><a href="/admin/add-product">Add Message</a></li>
      </ul>
    </nav>
  </header>
  
  <h3 style="padding-left:30px;">Messages:</h3>
  <ul>`;

  // Add product titles
  sortedProducts.forEach(product => {
    htmlString += `<li>${product.title}</li>`;
  });

  htmlString += `</ul>
</body>
</html>`;

  // Send the complete HTML string
  res.send(htmlString);

});

// router.get('/',(req,res,next)=>{
//     console.log(adminData.products);
//     res.sendFile(path.join(rootDir,"/views/shop.html"));
// });

module.exports=router;