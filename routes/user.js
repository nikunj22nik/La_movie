const express=require("express");
const route=express.Router();
const passport=require("passport");
const user_controller=require("../controller/user_controller");



//signup for user
route.get("/signup",user_controller.signup_page);
route.post("/create",user_controller.create);
route.post("/verify",user_controller.verify);


//login for user
route.get("/login",user_controller.loginpage);
route.post('/loginverify',passport.authenticate('local',
{failureRedirect:"/user/login"}),user_controller.login);





module.exports=route;