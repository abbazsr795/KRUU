import React, { useEffect, useState } from "react"
import { db } from "../FbStuff/fb"
import Select from 'react-select'
import { where,collection, getDocs, query, addDoc } from "firebase/firestore"

import { Switch } from "evergreen-ui"

let AddVaccinesforIndex = ()=>{

    let countries =[]

    let values = []

    let mednumber = 0

    let country_url = "https://restcountries.com/v2/all"

    const [checked, setChecked] = useState(false)
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    let [vaccselected,setSelected] = useState('')
    let [vaccselected1,setSelected1] = useState('')
    let [vaccname,setVaccName] = useState('')
    let [vaccdesc,setVaccDesc] = useState('')
    let [vaccurl,setVaccurl] = useState('')
    let [vaccregion,setVaccregion] = useState([])

    let [medrecord,setmedrecord] = useState([])

    let [medinput,setmedinput] = useState('')
    let [medselect,setmedselect] = useState('')

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

    medselect = [
        {value:'',label:''},
        {value:'',label:''},
    ]

    let addmedicalcondition1 = ()=>{
        let m = {
            m: medinput,
            ms: medselect
        }
        setmedrecord([...medrecord,m])
        console.log(medrecord)
    }

    let d = async () =>{
        let f = await fetch(country_url).then((g)=>g.json())
        for (let i = 0; i < f.length; i++) {
            let name = f[i].name
            let g = {
                value:name,
                label:name
            }
            countries.push(g)
        }
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
    let SelectedVal1 = (selectval)=>{
        setSelected1(selectval)
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
                <Switch checked={checked} height={24} onChange={(e)=>{setChecked(e.target.checked)}}  />
                {checked ? <><Select options={values} onChange={SelectedVal} /></> : null }
                <br/>
                <h3>medical conditions</h3>
                <Switch checked={checked2} height={24} onChange={(e)=>{setChecked2(e.target.checked)}}  />
                {checked2 ? <div><Select options={values} onChange={SelectedVal} /><input className="inputbox" onChange={setmedinput} /><button onClick={()=>{addmedicalcondition1()}} className={'button is-primary is-light'} >Add</button></div> : null}
                <h3>Countries</h3>
                <Switch checked={checked1} height={24} onChange={(e)=>{setChecked1(e.target.checked)}}  />
                {checked1 ? <Select options={countries} onChange={SelectedVal1} /> : null }
                <br/>
                <button onClick={()=>{add()}} >Add</button>
                {/* <h1>This works</h1> */}
            </div>
            {/* {medcondition.map(element=><div>{element}</div>)} */}
        </div>
    </div>
    )

}


export default AddVaccinesforIndex