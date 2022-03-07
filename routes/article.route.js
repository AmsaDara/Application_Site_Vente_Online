const express=require('express');
const router=express.Router();
const articleServices= require('../controllers/article.controller');
const verifyToken = require('../middlewares/userJWT');

// route.get('/',async (req,res)=>{
//     let articles=await articleServices.getAllArticles();
//     res.json('accueil', {articles});
// })




//CHEMIN POUR LES SERVICE ARTICLE
router.get('/article', verifyToken, async (req,res)=>{
    let articles=await articleServices.getAllArticles();
    res.json({articles});
})
router.post('/article', async (req,res)=>{
    let articles=await articleServices.saveArticle();
    res.json({articles});
})
// route.post('/article', articleServices.saveArticle);

// //A PROPOS
// route.get('/apropos',(req,res)=>{
//     res.json('pages/apropos');
// })
// //CONTACT
// route.get('/contact',async (req,res)=>{
//     res.json('pages/contact');
// });

module.exports=router;
