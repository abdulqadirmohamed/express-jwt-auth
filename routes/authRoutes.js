const { Router } = require('express')
const authcontroller = require('../controllers/authController')

const router = Router()

router.get('/signup', authcontroller.signup_get);
router.get('/login', authcontroller.login_get);

router.post('/signup', authcontroller.signup_post);
router.post('/login', authcontroller.login_post);

module.exports = router;