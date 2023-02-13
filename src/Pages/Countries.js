import { useEffect, useState } from "react";
import { Button, Pane, Popover } from "evergreen-ui";
import countries from "./data.json"

let Countries = ()=>{

    let Constant_RoutineVaccine = [ "Chickenpox (Varicella)",  "Diphtheria-Tetanus-Pertussis",  "Flu (influenza)",  "Measles-Mumps-Rubella (MMR)",  "Polio",  "Shingles"]

    return <>
        <h1 className="massivetext heading1 horizontalcenter">By Countries</h1>
        <div className="flexiblerow justifycontent-center">
            {
                countries.map(d=> <Popover content={<Pane width={300} height={700} >
                    <div className="card2">
                        <h1>Region : </h1>
                        <p> {d.Region} </p>
                        <h1>Routine Vaccines :</h1>
                        <p> {Constant_RoutineVaccine.map(f=><div>{f}</div>)} </p>
                        <h1>Recommended Vaccines</h1>
                        <p> {d.RecommendedVaccines.map(o=>(<div> {o} </div>))} </p>
                    </div>
                </Pane>} >
                    <div> <div className="card21 horizontalcenter grow"> {<h1>{d.Country}</h1>} </div> </div>
                </Popover>)
            }
        </div>
    </>

}

export default Countries