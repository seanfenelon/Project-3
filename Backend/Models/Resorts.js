const mongoose = require('mongoose')
// hmm not working hmmmmm
const resortsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  top_elevation: { type: Number, required: true },
  bottom_elevation: { type: Number, required: true },
  lon: { type: Number, required: true },
  lat: { type: Number, require: true }
})

module.exports = mongoose.model('Resorts', resortsSchema)