module.exports.signup_get = (req, res) => {
    res.render('signup')
}

module.exports.login_get = (re, res) => {
    res.render('login')
}

module.exports.signup_post = (re, res) => {
    res.send('signup')
}

module.exports.login_post = (re, res) => {
    res.send('login')
}