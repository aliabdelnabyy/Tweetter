const express = require('express');
const router = express.Router();
const db= require("../config/db");

router.post("/",(req,res)=>{

    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const author = req.body.author;

    db.query("INSERT INTO Uploads (title,description,image,author) VALUES (?,?,?,?);", [title,description,image,author]
    ,(err,result)=>{
        console.log(err);
        res.send(result);
    });
})

router.get("",(req,res)=>{
    db.query("SELECT * FROM Uploads",(err,results)=>{
       if(err){
           console.log(err)
        }
        else{
            res.send(results)
        }

    })
})

router.get('/byUser/:username',(req,res)=>{
    const username= req.params.username;
    console.log(username);
    db.query("SELECT * FROM Uploads WHERE author = ?;",username,(err,results)=>{
        
       if(err){
           console.log(err)
        }
        else{
            res.send(results)
        }

    })
})

router.post('/like',(req,res)=>{
    const userLiking = req.body.userLiking;
    const postId = req.body.postId;
    db.query("INSERT INTO Likes (userLiking, postId) VALUES (?,?);",[userLiking,postId],(err,results)=>{
        if(err){
            console.log(err);
        }
        db.query("UPDATE Uploads SET likes = likes + 1 where id = ? ;" , postId, (err2 , results2) =>{
            res.send(results);
        })
        

    })
})



module.exports = router;