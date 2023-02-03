import 'bulma/css/bulma.min.css';

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NotFound = () =>{

    let navigate = useNavigate()

    let [content,Setcontent] = useState('')
    
    const getPic = async () =>{
        let g = await fetch("https://api.nasa.gov/planetary/apod?api_key=sVZJqmh4aCTKXhXdh5BhLyWce8NYQTkJc56elKs2").then((g)=>g.json())
        Setcontent(g)
    }

    // let apikey = "sVZJqmh4aCTKXhXdh5BhLyWce8NYQTkJc56elKs2"

    getPic()


    return  <div className="has-text-centered">
                <h1 className='title'>No Such Page</h1>
                <button className="button is-primary" onClick={()=>{navigate('/')}} >Back</button>
                <br></br>
                <p className='black'>While you are here, here's the NASA pic of the day</p>
                <br></br>
                <h3 className='black'>{content.title}</h3>
                <img className='img99' height={"600"} width={"800"} src={content.hdurl} alt="" />
                <br></br>
                <div className='horizontalcenter'><p className='whiteback pa4 border10 fit black'> {content.explanation} </p></div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
    // </div>
}

export default NotFound