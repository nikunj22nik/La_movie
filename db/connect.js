const mongoose=require("mongoose");
const db1='mongodb+srv://nikunj:nikunj@cluster0.rv82u.mongodb.net/Movie_Recommendation?retryWrites=true&w=majority';
mongoose.connect("mongodb://localhost/Movie_Recommendation",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

});


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});
module.exports = db;

// const { MongoClient } = require('mongodb');
//  const uri = "mongodb+srv://nikunj:<password>@cluster0.rv82u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//  client.connect(err => {
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    client.close();
//  });