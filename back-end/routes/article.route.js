const express=require('express');
const router=express.Router();
const articleServices= require('../controllers/article.controller');
const verifyToken = require('../middlewares/userJWT');
const Article = require('../models/article')

// route.get('/',async (req,res)=>{
//     let articles=await articleServices.getAllArticles();
//     res.json('accueil', {articles});
// })




//CHEMIN POUR LES SERVICE ARTICLE
router.get('/article', verifyToken, async (req,res)=>{
    let articles=await articleServices.getAllArticles();
    res.json({articles});
})
// router.post('/article', async (req,res)=>{
//     let articles=await articleServices.saveArticle();
//     res.json({articles});
// })

router.post('/article', async (req,res)=>{
    const article = new Article({
      titre : req.body.titre,
      description : req.body.description,
      photo : req.body.photo,
      mini_photo : req.body.mini_photo,
      nbreArticle : req.body.nbreArticle,
      prix : req.body.prix
      });
      article.save()
      .then(
        () => {
          res.status(201).json({
            message: 'Votre Article est enregistré avec succéss !'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
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

// requete pour voir un article
router.post('/article/select/:_id',  articleServices.itemArticle)

// requete pour modifier un article
router.put('/article/update/:_id', articleServices.updatArticle)

// requete pour sup un article
router.delete('/article/delete/:_id', articleServices.deleteArticle)

module.exports=router;
