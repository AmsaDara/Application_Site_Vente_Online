const express=require('express');
const router=express.Router();
const contactServices= require('../controllers/contact.controller');
const Contact=require('../models/contact');



// route.get('/',async (req,res)=>{
//     let articles=await articleServices.getAllArticles();
//     res.json('accueil', {articles});
// })


//CHEMIN POUR TOUT LES MESSAGES
router.get('/contact', async (req,res)=>{
    let contacts=await contactServices.getAllContact();
    res.json({contacts});
})

//CHEMIN POUR TOUT SAUVAGARDER UN MESSAGE
router.post('/contact', contactServices.saveMessage) 

//CHEMIN POUR SUPPRIMER UN MESSAGE
router.delete('/contact/delete/:_id', contactServices.deleteMessage)

// router.post('/contact', async (req,res)=>{
//     const contact = new Contact({
//       fullName : req.body.fullName,
//       email : req.body.email,
//       tel : req.body.tel,
//       commentaire : req.body.commentaire
//       });
//       contact.save()
//       .then(
//         () => {
//           res.status(201).json({
//             message: 'Message enregistré avec succéss !'
//           });
//         }
//       ).catch(
//         (error) => {
//           res.status(400).json({
//             error: error
//           });
//         }
//       );
// })

// router.post('/contact', async function(req, res, next) {
//     const contact = req.body;
//     try {
//         let response = await contactServices.saveMessage(contact);
//         res.json(response);
//       } catch (error) {
//         next(error)
//       }
// });


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
