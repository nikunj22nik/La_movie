const express = require("express");
const route = express.Router();


module.exports.home=function(req,res){
    res.render("moviehome");
}