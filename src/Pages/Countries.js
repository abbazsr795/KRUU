import { useEffect, useState } from "react";
import { Button, Pane, Popover } from "evergreen-ui";

import countries from "./data.json"

let Countries = ()=>{

    let Constant_RoutineVaccine = [ "Chickenpox (Varicella)",  "Diphtheria-Tetanus-Pertussis",  "Flu (influenza)",  "Measles-Mumps-Rubella (MMR)",  "Polio",  "Shingles"]

    return <>
        <h1 className="massivetext heading1 horizontalcenter">By Countries</h1>
        {
            countries.map(d=> <Popover content={<Pane width={300} height={400} >
                <p> {d.Region} </p>
                <p> {Constant_RoutineVaccine.map(f=><div>{f}</div>)} </p>
            </Pane>} >
                <Button>{d.Country}</Button>
            </Popover>)
        }
    </>

}

export default Countries