const NotFound = () =>{
    
    async function getPic(apikey){
        let g = await fetch("https://api.nasa.gov/planetary/apod?api_key="+apikey)
        let f = g.json()
        console.log("done "+f.title)
        return f
    }

    let apikey = "sVZJqmh4aCTKXhXdh5BhLyWce8NYQTkJc56elKs2"
    
    
    let f = getPic(apikey)

    return <>
        <h1>No Such PAge</h1>
        <p>While you are here, here's the NASA pic of the day</p>
        <h3>{f.title}</h3>
        
    </>
}

export default NotFound