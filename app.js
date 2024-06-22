
const express = require('express');
const { mongoose } = require('mongoose');
const path = require('path');
const authRoute = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')

const app = express();

// setup EJS
app.set('view engine', 'EJS');

// Database connection
const dbUrl = 'mongodb+srv://cajiibxaaji02:T3oCB1oD6kF439nW@cluster0.7qh5e7x.mongodb.net/ninja-blog'
mongoose.connect(dbUrl)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))



// Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})
app.get('/smoothies', (req, res) => {
    res.render('smoothies', { title: 'Smoothies' })
})

// Cookies
app.get('/set-cookies', (req, res)=>{
    // res.setHeader('Set-Cookie', 'newUser=true');
    res.cookie('newuser', false)
    res.cookie('isEmployee', true, {maxAge: 1000 * 60 * 60 * 24, httpOnly: false})


    res.send('you got a cookie')
})

app.use(authRoute)

// app.listen(port)