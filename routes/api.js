const express = require('express');
const router = express.Router();


router.get('/home', (req,res)=>{
         res.render('home');
});


//all user related routes
router.use('/user',require("./user"));
router.use('/movie',require("./movie"));


module.exports = router;