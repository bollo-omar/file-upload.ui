import axios from "axios";
import { useEffect, useState } from "react"

export default function Display(){
    
    const id = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1); 
    const [imageData,setImageData] = useState(null);

    const url = 'http://localhost:3001/fetch-url';
    const userData = {id : window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1) };

    const getimage =  async function(){
        try{
            const img = await axios({
               url,
               method: 'POST',
               data: userData,               
               headers : {'content-type': 'application/json'},
               responseType: 'blob'
            });
            const resp = img.data;

            let blob = new Blob(
                [resp], 
                { type: img.headers['content-type'] }
              )
              let image = window.URL.createObjectURL(blob)
              setImageData(image);
            
        }
        catch(err){
            console.log("error : ",err.message);
        }
    }

    useEffect(()=>{
        
        getimage();
        
    },[]);    
   
    
    
    return(
        
        <section className="display" align="center">
            <h4 style={{textAlign: 'center', fontSize: "2.0em"}}>
               MY IMAGE
            </h4>
            <div className="image-preview">
                <img src={imageData} alt="pic" style={{width: "60vw", borderRadius:"10px"}}/>
            </div>        
        </section>
    );
}