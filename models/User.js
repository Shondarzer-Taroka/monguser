// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // name: { type: String, required: true },
    name: { type: String, required:true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    date: { type: Date, default: Date.now },
    password:{type:String,required:true}
});

const User = mongoose.model('User', userSchema);
module.exports = User;
