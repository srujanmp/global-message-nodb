const express=require('express');
const path=require('path');

const rootDir=require('./util/path');
const bodyParser=require('body-parser');
const adminData=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const app=express();


app.use(bodyParser.urlencoded());
app.use(express.static(path.join(rootDir,'public')));

app.use('/admin',adminData.route);
app.use(shopRoutes);
app.set('views',path.join(rootDir,'views'));
app.set('view engine','pug');
app.use((req,res,next)=>{
    res.status(404);
    res.sendFile(path.join(rootDir,'views','404.html'));
});
app.listen(3000);