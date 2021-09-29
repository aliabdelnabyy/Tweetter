const express = require('express');
const router = express.Router();
const db= require("../config/db");

router.post('/register',(req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO Users (username,password) VALUES (?,?);", [username,password]
    ,(err,result)=>{
        console.log(err);
        res.send(result);
    });
})

router.post('/login',(req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    db.query("Select * from Users where username = ?", username
    ,(err,result)=>{
        if(err){
            console.log(err);
        }
        if (result.length>0)
        {
            if(password==result[0].password) {
                    res.json({loggedIn : true ,username : username});
                }
            else{
                res.json({loggedIn : false ,message : "wrong username or password"});
            }
        }
        else{
            res.json({loggedIn : false ,message : "username doesn't exist"});
        }
        
    });
})

module.exports = router;