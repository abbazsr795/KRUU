const NotFound = () =>{

    let f = null
    
    async function getPic(){
        let g = await fetch("https://api.nasa.gov/planetary/apod?api_key="+apikey)
        f = g.json()
        console.log("done "+f.title)
    }

    let apikey = "sVZJqmh4aCTKXhXdh5BhLyWce8NYQTkJc56elKs2"
    
    
    getPic()

    return <>
        <h1>No Page</h1>
        {/* <p> {f.title} </p> */}
    </>
}

export default NotFound