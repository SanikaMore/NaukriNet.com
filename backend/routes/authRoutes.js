const express= require('express');
const {signup, userProfile} =require('../controllers/authController');
const {signin , logout} =require('../controllers/authController');
const {isAuthenticated} = require('../middleware/auth');
const router= express.Router();

//auth routes
router.post('/signup', signup);

router.post('/signin', signin);

router.get('/logout', logout);

router.get('/me',isAuthenticated,userProfile);


module.exports= router;