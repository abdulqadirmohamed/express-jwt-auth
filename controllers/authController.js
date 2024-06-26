const User = require("../models/User")
const jwt = require('jsonwebtoken')

// Hadle errors

const handleErrors = (err) => {
    console.log(err.message, err.code)

    // validate erros

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
           console.log(properties)
        })
    }

}

module.exports.signup_get = (req, res) => {
    res.render('signup')
}

module.exports.login_get = (req, res) => {
    res.render('login')
}

// JWT
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'net ninja secret', {
        expiresIn: maxAge
    })
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;
    const token = createToken(User._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: User._id })
    try {
        const user = await User.create({ email, password })
        res.status(201).json(user)
    } catch (err) {
        handleErrors(err)
        res.status(400).send('error, user not created');
    }
}

module.exports.login_post = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    res.send('login')
}