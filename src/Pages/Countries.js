import { useEffect, useState } from "react";

import countries from "./data.json"

let Countries = ()=>{

    return <>
        <h1>Countries</h1>
        {
            countries.map(d=><div> {d.Country} </div>)
        }
    </>

}

export default Countries