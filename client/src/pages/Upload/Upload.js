import React, { useState } from 'react'
import './Upload.css';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';


function Upload() {

    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const[image,setImage] = useState([]);

    let history =useHistory();

    const upload = () => {
        const formData = new FormData();
        formData.append("file",image[0]);
        formData.append("upload_preset" , "srjrtp7e");

        Axios.post(`https://api.cloudinary.com/v1_1/alyyabdelnaby/image/upload`,formData).then((response) =>{

            const fileName = response.data.public_id; 

            Axios.post("http://localhost:3001/upload",{title:title , description:description , image : fileName, author : localStorage.getItem("username")}).then(()=>{
                history.push("/");
            })

        });
    }

    return (
        <div className="Upload">
            <div className="upload">
            <h1>Create A Post</h1>
            <div className="uploadForm">
                <input type="text" placeholder="Title..." onChange={(e)=>{setTitle(e.target.value)}}  />
                <input type="text" placeholder="desciption..." onChange={(e)=>{setDescription(e.target.value)}} />
                <input type="file" className="uploading" onChange={(e)=>{ setImage(e.target.files)}} />
                <button onClick={upload} >Upload</button>
            </div>
        </div>
        </div>
    )
}

export default Upload
