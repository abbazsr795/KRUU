import { useEffect, useState } from "react";

import countries from "./data.json"

let Countries = ()=>{

    return <>
        <h1 className="massivetext heading1 horizontalcenter">By Countries</h1>
        <div className="flexiblerow justifycontent-center">
            {
                countries.map(d=><div className="card21 horizontalcenter grow"> {<h1>{d.Country}</h1>} </div>)
            }
        </div>
    </>

}

export default Countries