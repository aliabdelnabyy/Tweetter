import React,{useEffect, useState} from 'react';
import './Home.css';
import {Image} from 'cloudinary-react';
import Axios from 'axios';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function Home() {

  const [uploads,setUploads] = useState([]);
  const [Likes,setLikes] =  useState([]);

  useEffect(()=>{
    if(!localStorage.getItem("loggedIn")){
      localStorage.setItem("loggedIn",false);
    }
  },[]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/upload").then((response)=>{
      setUploads(response.data);
      var tempArr = [];

      response.data.map((val)=>{
        tempArr.push(val.likes);
      });
      setLikes(tempArr);
    })
  },[])

  const likePost = (id) =>{
    Axios.post("http://localhost:3001/upload/like",{userLiking : localStorage.getItem("username"), postId: id}).then((response)=>{
      console.log("u liked this post");
    })
  }

  return (
    <div className="Home">

      {uploads.map((val,key)=>{
        return(
          <div className="Post">
            <div className="Image">
              <Image cloudName="alyyabdelnaby" publicId={val.image} />
            </div>
            <div className="Content">
              <div className="title">{val.title} / by @{val.author}</div>
              <div className="description"> asdasdlaskn lsajndklsadkl lkjnaskldjnklnj lksajdlkjnaskld kljsandlkjnaskld</div>
              <div className="engagement">
                <ThumbUpIcon className="thumb" onClick={()=>{
                  likePost(val.id);
                  var tempLikes = Likes;
                  tempLikes[key] = tempLikes[key] +1 ;
                  setLikes()
                }}/>
                {val.likes}
              </div>
            </div>
          </div>
        )
      })}
      
        
    </div>
  );
}

export default Home;


