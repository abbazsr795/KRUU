import React, { useEffect, useState } from "react"
import { db } from "../FbStuff/fb"
import Select from 'react-select'
import { where,collection, getDocs, query, addDoc } from "firebase/firestore"

import { Switch, toaster } from "evergreen-ui"

let AddVaccinesforIndex = ()=>{

    // let [countries,setcountries] = useState([])

    let values = []

    // let mednumber = 0

    // let country_url = "https://restcountries.com/v2/all"

    // let [vaccselected,setSelected] = useState('')
    // let [vaccselected1,setSelected1] = useState('')
    // let [vaccselected2,setSelected2] = useState('')
    let [vaccname,setVaccName] = useState('')
    let [vaccdesc,setVaccDesc] = useState('')

    let [vaccabr,vaccabrset] = useState('')
    let [typevac,typevacset] = useState('')
    let [vacccat,vacccatset] = useState('')
    let [vaccconditions,vaccconditionsset] = useState('')
    let [vacchighriskindividuals,vacchighriskindividualsset] = useState('')
    let [vaccregions,vaccregionsset] = useState('')
    let [vaccsideeffects,vaccsideeffectsset] = useState('')
    let [vaccwarning,vaccwarningset] = useState('')

    let add = async ()=>{
        
        const docref = await addDoc(collection(db,"Index"),{
            name: vaccname,
            desc: vaccdesc,
            abr: vaccabr,
            cat: vacccat,
            conditions:vaccconditions,
            highriskindividuals: vacchighriskindividuals,
            regions: vaccregions,
            sideeffects: vaccsideeffects,
            warning: vaccwarning,
            vactype: typevac
        })

        if (docref!==""){
            toaster.success("Success")  
        }
    }
    

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

    let medselect = [
        {value:'diabetes',label:'Diabetes'},
        {value:'cld',label:'Chronic liver disease'},
        {value:'hld',label:'Heart or lung disease'},
        {value:'endstageRDorhd',label:'End-stage renal disease, or on hemodialysis'},
        {value:'asplenia',label:'Asplenia, complement deficiencies'},
        {value:'immunocompromised',label:'Immunocompromised (excluding HIV infection)'},
        {value:'hivcd4countl15p',label:'HIV infection CD4 percentage and count <15% or <200 mm3'},
        {value:'hivcd4countg15p',label:'HIV infection CD4 percentage and count ≥15% and ≥200 mm3'},
        {value:'preg',label:'Pregnant'},
        {value:'workhealthcare',label:'Work in healthcare'},
        {value:'alcholic',label:'Alcoholic'},
        {value:'gay',label:'Male who have sex with males'},
    ]

   

    // let d = async () =>{
    //     let countries1 = []
    //     let f = await fetch(country_url).then((g)=>g.json())
    //     for (let i = 0; i < f.length; i++) {
    //         let name = f[i].name
    //         let g = {
    //             value:"country",
    //             label:name
    //         }
    //         countries1.push(g)
    //     }
    //     setcountries(countries1)
    // }

    

    let vaccnameset = (event)=>{
        setVaccName(event.target.value)
        // alert(selectval.value)
    }
    let vaccdescset = (event)=>{
        setVaccDesc(event.target.value)
        // alert(selectval.value)
    }
    let typevacSet = (event)=>{
        typevacset(event.target.value)
        // alert(selectval.value)
    }
    let vaccAbrset = (event)=>{
        vaccabrset(event.target.value)
        // alert(selectval.value)
    }
    let vaccCatset = (event)=>{
        vacccatset(event.target.value)
        // alert(selectval.value)
    }
    let vaccSideeffectsset = (event)=>{
        vaccsideeffectsset(event.target.value)
        // alert(selectval.value)
    }
    let vaccConditionsset = (event)=>{
        vaccconditionsset(event.target.value)
        // alert(selectval.value)
    }
    let vaccHighriskindividualsset = (event)=>{
        vacchighriskindividualsset(event.target.value)
        // alert(selectval.value)
    }
    let vaccRegionsset = (event)=>{
        vaccregionsset(event.target.value)
        // alert(selectval.value)
    }
    let vaccWarningset = (event)=>{
        vaccwarningset(event.target.value)
        // alert(selectval.value)
    }


    // useEffect(()=>{
    //     d()
        
    // },[])

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
                <h3>Abbreviation</h3>
                <input value={vaccabr} onChange={vaccAbrset} />
                <br/>
                <h3>Category</h3>
                <textarea value={vacccat} onChange={vaccCatset} />
                <br/>
                <h3>Side Effects</h3>
                <textarea value={vaccsideeffects} onChange={vaccSideeffectsset} />
                <h3>Types of Vaccine</h3>
                <textarea value={typevac} onChange={typevacSet} />
                <br/>
                <br/>
                <h3>High risk Individuals</h3>
                <textarea value={vacchighriskindividuals} onChange={vaccHighriskindividualsset} />
                <br/>
                <h3>Regions</h3>
                <textarea value={vaccregions} onChange={vaccRegionsset} />
                <br/>
                <h3>Be carefulif you are</h3>
                <textarea value={vaccwarning} onChange={vaccWarningset} />
                <br/>


                <button onClick={()=>{add()}} className={"button is-primary is-light"} >Add</button>
                {/* <h1>This works</h1> */}
            </div>
            {/* {medcondition.map(element=><div>{element}</div>)} */}
        </div>
    </div>
    )

}


export default AddVaccinesforIndex