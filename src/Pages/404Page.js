import { useState } from "react"

const NotFound = () =>{

    let [content,Setcontent] = useState('')
    
    const getPic = async () =>{
        let g = await fetch("https://api.nasa.gov/planetary/apod?api_key=sVZJqmh4aCTKXhXdh5BhLyWce8NYQTkJc56elKs2").then((g)=>g.json())
        Setcontent(g)
    }

    // let apikey = "sVZJqmh4aCTKXhXdh5BhLyWce8NYQTkJc56elKs2"

    getPic()


    return <div className="verticalcenter">
        <h1>No Such Page</h1>
        <p>While you are here, here's the NASA pic of the day</p>
        <h3>{content.title}</h3>
        <img height={"600"} width={"800"} src={content.hdurl} alt="" />
        <p> {content.explanation} </p>
    </div>
}

export default NotFound