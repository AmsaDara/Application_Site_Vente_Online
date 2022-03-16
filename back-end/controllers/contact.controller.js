const mongoose=require('mongoose');

const Contact=require('../models/contact');

const getAllContact= async ()=>{
    let contacts = await Contact.find();
    return contacts;
}

const saveMessage = async(req, res)=>{
  try {
    const newMessage = await Contact.create(req.body);
    res.status(200).json({newMessage});
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteMessage = async (req, res, next)=>{
  try {
    const supMsg = await Contact.remove({_id: req.body._id});
    res.status(200).json({Message: 'Object suprimmé ave succés'})
  } catch (error) {
    res.status(500).json(error);
  }
}
// const saveMessage = async (req, res, next)=>{
//   delete req.body._id;
//   let contact = {
//     ...req.body
//   };
//   Contact.create(contact)
//     .then(() => res.status(201).json({ message: 'Message enregistré !'}))
//     .catch(error => res.status(400).json({ error }));
// };

// const saveMessage = async (req,res)=>{
//   let contact = new Contact({
//     fullName : req.body.fullName,
//     email : req.body.email,
//     tel : req.body.tel,
//     commentaire : req.body.commentaire
//     });
//     contact.save()
//     .then(
//       () => {
//         res.status(201).json({
//           message: 'Message enregistré avec succéss !'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
// }

// const saveMessage = async (req, res, next)=>{
//     let contact = new contact( {
//       fullName : req.body.fullName,
//       email : req.body.email,
//       tel : req.body.tel,
//       commentaire : req.body.commentaire
      
//     });
//     contact.save()
//       .then(() => res.status(201).json({ message: 'Message enregistré avec succéss !'}))
//       .catch(error => res.status(400).json({ error }));
//   };

//   const saveMessage = (Contact) => async (req, res, next) =>{
//     const _contact= new Contact(contact);
//     try {
//         const result = await _contact.save();
//         if(result){
//             res.json({
//                 status:'success',
//                 message:'Message saved successfully',
//                 payload: result
//             });
//         }    
//     } catch (error) {
//      res.json({
//          status:'fail',
//          message:'Message fail to be saved',
//          payload: error
//      });
//     }
//  };

module.exports={
    getAllContact,
    saveMessage,
    deleteMessage
}