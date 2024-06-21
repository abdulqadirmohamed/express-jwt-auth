const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
});

// Fire function afte doc saved
userSchema.post('save', function(doc, next){
    console.log('New user was created and saved')
    next()
})

// Fire function before doc save
userSchema.pre('save', function(next){
    next()
})
const User = mongoose.model('user', userSchema);
module.exports = User;