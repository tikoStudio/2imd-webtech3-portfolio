const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const coronaSchema = new Schema({
    Belgium: Number,
    Netherlands: Number,
    Luxemburg: Number
})
const Corona = mongoose.model('Corona', coronaSchema)

module.exports = Corona