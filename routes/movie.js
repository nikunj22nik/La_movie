const express=require("express");
const route=express.Router();
const passport=require("passport");
const movie_controller=require("../controller/movie_controller");


route.get("/home",movie_controller.home);


module.exports=route;