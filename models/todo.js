const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    todo: String
},
{
    timestamps: true
})



module.exports = mongoose.model('Todo', todoSchema);