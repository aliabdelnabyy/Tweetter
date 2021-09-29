import Axios from 'axios'
import React, {  useState,useEffect } from 'react';
import {Image} from 'cloudinary-react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function Profile() {

    
    const [yourUploads,setYourUploads] = useState([]);

    useEffect(()=>{
        Axios.get(`http://localhost:3001/upload/byUser/${localStorage.getItem("username")}`,{username : localStorage.getItem("username")}).then((response)=>{
            setYourUploads(response.data)
        })
    },[])

    return (
        <div className="profile">
            <h1>{localStorage.getItem("username")}</h1>

            {yourUploads.map((val,key)=>{
        return(
          <div className="Post">
            <div className="Image">
              <Image cloudName="alyyabdelnaby" publicId={val.image} />
            </div>
            <div className="Content">
              <div className="title">{val.title} / by @{val.author}</div>
              <div className="description"> asdasdlaskn lsajndklsadkl lkjnaskldjnklnj lksajdlkjnaskld kljsandlkjnaskld</div>
              
            </div>
          </div>
        )
      })}
            
        </div>
    )
}

export default Profile
