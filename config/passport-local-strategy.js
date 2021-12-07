const passport = require("passport");
const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcryptjs');

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      //find the user and establish identity

      User.findOne({ email: email },async function (err, user) {
        if (err) {  
          console.log("error in finding user --->Passport");
          req.flash("error", err);
          return done(err);
        }

      
        if (!user) {
         console.log("InvALID USER");
          req.flash("error","Invalid username/password");
         return done(null, false);
        }

        const validpass = await bcrypt.compare(password, user.password);
        if(! validpass){
          console.log("InvALID USER");
          req.flash("error","Invalid username/password");
          return done(null, false);
        }else{
           return done(null, user);
      }
    
    });
    
    }
  )
);

//serializing to check the user to decide which key is kept on the cookie

passport.serializeUser(function(user,done){
  done(null,user.id);
})

//deserializing the user from te key in the cookies

passport.deserializeUser(function(id,done){
  User.findById(id,function(err,user){
    if(err){
      console.log("error in finding the user");
      done(err);
    }
    return done(null,user);
  })
})



//simply check user is login or not

passport.checkAuthentication=function(req,res,next){
   //if user is signin then pass on the request to the next function(controller action)

   if(req.isAuthenticated()){
    return  next();
  }
 return res.redirect("/user/signin");
}



passport.setAuthenticatedUser=function(req,res,next){
    
   if(req.isAuthenticated()){
//req.user contains current signin user from the session cookie and we are just sending this to locals for the views
      res.locals.user=req.user;
  }
  return next();
}

module.exports=passport;

