const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema({
  views: String,
  likes: String,
  comments: String,
  favourites: String
})

const PublicationSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  platform: {
    type: String,
  },
  linktopub: {
    type: String,
  },
  metrics: AddressSchema
})


module.exports = mongoose.model('Publication', PublicationSchema)