var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Contact Schema
 */
var contactSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '{VALUE} is not a valid email!'
    }

  },
  tel: {
    type: Number,
    required: [true, "SVP Entrer un bon numéro"]
  },
  commentaire: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Contact', contactSchema);