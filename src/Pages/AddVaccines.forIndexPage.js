import { useEffect, useState } from "react"
import { db } from "../FbStuff/fb"
import Select from 'react-select'
import { collection, getDocs, query, addDoc } from "firebase/firestore"

let AddVaccinesforIndex = ()=>{

    let countries =[]
    let values = []

    let country_url = "https://restcountries.com/v2/all"

    let [vaccselected,setSelected] = useState('')
    let [vaccname,setVaccName] = useState('')
    let [vaccdesc,setVaccDesc] = useState('')
    let [vaccurl,setVaccurl] = useState('')
    let [vaccregion,setVaccregion] = useState([])

    values = [
        {value: "Northern Asia", label: ""},
        {value: "Central Asia", label: "Central Asia" },
        {value: "South America", label: "South America"},
        {value: "Western Asia", label: "Western Asia"},
        {value: "Southern Asia", label: "Southern Asia"},
        {value: "Eastern Asia",label: "Eastern Asia"},
        {value: "South Eastern Asia", label:"South Eastern Asia"},
        {value:"Europe", label:"Europe"},
        {value:"Oceania", label:"Oceania"},
        {value:"North America", label:"North America"},
        {value:"Africa", label:"Africa"},
        {value:"All", label:"All"}
    ]

    let d = async () =>{
        let f = await fetch(country_url).then((g)=>g.json())
        console.log(f)
    }

    let add = async ()=>{
        const docref = await addDoc(collection(db,"Index"),{
            name: vaccname,
            desc: vaccdesc,
            url:  vaccurl,
            vaccregion: vaccselected.label
        })

        if (docref!==""){
            alert('success') 
        }
    }


    let SelectedVal = (selectval)=>{
        setSelected(selectval)
        // alert(selectval.value)
    }
    let vaccnameset = (event)=>{
        setVaccName(event.target.value)
        // alert(selectval.value)
    }
    let vaccdescset = (event)=>{
        setVaccDesc(event.target.value)
        // alert(selectval.value)
    }
    let vaccurlset = (event)=>{
        setVaccurl(event.target.value)
        // alert(selectval.value)
    }

    // useEffect(()=>{
    //     for (let i = 0; i < vaccregion.length; i++) {
    //         values.push({
    //             value: vaccregion[i],
    //             label: vaccregion[i]
    //         })
    //       }
    //     console.log(values)
    // },[vaccregion, values])

    useEffect(()=>{
        d()
    },[])

    return(
    <div className="stack">
        <br></br>
        <br></br>
        <div className="horizontalcenter">
            <div className="card4 lightblue pa4">
                <h3>Name of Vaccine</h3>
                <input value={vaccname} onChange={vaccnameset} />
                <br/>
                <h3>Description</h3>
                <textarea value={vaccdesc} onChange={vaccdescset} />
                <br/>
                <h3>URL</h3>
                <input value={vaccurl} onChange={vaccurlset} />
                <br/> 
                <h3>Region</h3>
                <Select options={values} onChange={SelectedVal} />
                <br/>
                <button onClick={()=>{add()}} >Add</button>
                {/* <h1>This works</h1> */}
            </div>
        </div>
    </div>
    )

}


export default AddVaccinesforIndex