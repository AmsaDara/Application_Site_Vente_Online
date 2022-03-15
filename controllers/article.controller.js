const mongoose=require('mongoose')
const Article=require('../models/article');

// requete de tout les articles
const getAllArticles= async ()=>{
    let articles = await Article.find();
    return articles;
}

// requete pour save un article
const saveArticle = async (req, res, next)=>{
    delete req.body._id;
    const article = {
      ...req.body
    };
    Article.create(article)
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };
// requete d'un article
const itemArticle = async (req, res, next)=>{
  try {
    const item = await Article.findById(req.body._id);
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json(error);
  }
}

// requete pour modifier un article
const updatArticle = async(req, res, next)=>{
  const {body} = req;
  try {
    const updateOne = await Article.findByIdAndUpdate(body._id,);
    res.status(200).json(updateOne);
  } catch (error) {
    res.status(500).json(error);
  }
}

// requete pour supprimé un article
const deleteArticle = async (req, res, next)=>{
  try {
    const supArt = await Article.remove({_id: req.body._id});
    res.status(200).json({Message: 'Object suprimmé ave succés'})
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports={
    getAllArticles,
    saveArticle,
    itemArticle,
    updatArticle,
    deleteArticle
}