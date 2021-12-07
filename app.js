require('dotenv').config()
const express = require('express');
const mongoose= require('mongoose');
const expressLayouts=require("express-ejs-layouts");
const app = express();
const db=require("./db/connect");
const cookieParser = require('cookie-parser');
const MongoStore=require("connect-mongo");


const flash=require( "connect-flash" );
const customMiddleware=require("./config/middleware");
const session=require("express-session");
const passport=require('passport');
const passportLocal=require("./config/passport-local-strategy");

app.set('view engine', 'ejs');
app.set("views","./views");
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

 // extract style and scripts from sub pages into the layout
 app.set('layout extractStyles', true);
 app.set('layout extractScripts', true);




 //flash
 



 //mongo store is use to store the session cookie in the db so that whenever we restart server loggedin user cant loggedout.


 app.use(session({
    name:"La_Movie",
    secret: "babajhbsajdbsajdbsajkdbksad",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxage:(1000)
    },
    store: MongoStore.create({
       mongoUrl:"mongodb://localhost/Movie_Recommendation",
       autoRemove:"disabled"
    },
    function(err){
        console.log(err||"conect mongo dbsetup");
    }
    
    )
 }));

 app.use(passport.initialize());
 app.use(passport.session());
 app.use(passport.setAuthenticatedUser);
 app.use(flash());
 app.use(customMiddleware.setFlash);

app.use('/',require('./routes/api'));




app.listen(process.env.PORT||8123,()=>{
    console.log("Port running Succesfully");
});