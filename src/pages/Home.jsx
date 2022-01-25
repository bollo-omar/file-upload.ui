import {useState} from 'react';
import altImg from '../alt-img.svg'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
export default function Home(){

    const [file,setFile] = useState(null);
    const [imageData, setImgData] = useState(null);
    const [ID,setID] = useState("");
    
    

    function handleChange(event) {
        if(event.target.files[0]) {
            setFile(event.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              setImgData(reader.result);
            });
            reader.readAsDataURL(event.target.files[0]);
          }
    }

    function submitData(evt){
        evt.preventDefault();
        !imageData ? alert("please upload an image") : submit();
    }

    const submit = async ()=>{

        const url = 'http://localhost:3001/upload';
        const body = new FormData();
        body.append('photo', file);

        await axios({
            url,
            method: 'POST',
            data: body,
            headers: { 'content-type': 'multipart/form-data' }
        }).then(res=>{
            document.getElementById('imgForm').reset();             
            setID(res.data.mimeData._id);
            setImgData(null);
            alert("picture uploaded succesfully");
        
        }).catch(err=>{
            alert(err.message);
            
        });
    }
    
    
    return(
        <>
            {ID!=="" && <Navigate to={`view-images/${ID}`}/>}
            <section className="container">
                <div className="form-wrapper">
                    <form onSubmit={submitData} id="imgForm">

                        <h2>Upload File</h2><br/>
                        
                        <label className="file">
                            <input type="file" id="file" name="photo" onChange={handleChange} className="custom-file-input" aria-label="File browser example"/>                                
                        </label>
                       
                        <button type="submit"  >upload</button>
                    </form>
                </div>
                <div className="image-preview">
                    <h3>&ensp;&nbsp;Preview Image </h3>
                    <br/>
                    <img src={imageData!==null? imageData : altImg} alt="pic"/>
                </div>
            </section>
        </>
    )
}