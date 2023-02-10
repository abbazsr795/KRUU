// import data from "./Components/Country-Vaccine" 
let Conditions = ()=>{

    return <>
    <h1 className="massivetext heading1 horizontalcenter">By Conditions</h1>
    <br></br>
    <br></br>
    <div className="flexiblerow spacebetween grey">
        <h1 className="boxtext1 lightyellow ultrasmalltext">Recommended vaccination for adults who meet age requirement, lack documentation of vaccination, or lack evidence of past infection</h1>
        <h1 className="boxtext1 lightpurple ultrasmalltext">Recommended vaccination for adults with an additional risk factor or another indication</h1>
        <h1 className="boxtext1 lightcyan ultrasmalltext">Recommended vaccination based on shared clinical decision-making</h1>
        <h1 className="boxtext1 lightgrey ultrasmalltext">No recommendation/Not applicable</h1>
        <h1 className="boxtext1 torange ultrasmalltext">Precaution—vaccination might be indicated if benefit of protection outweighs risk of adverse reaction</h1>
        <h1 className="boxtext1 tred ultrasmalltext">Contraindicated or not recommended—vaccine should not be administered. *Vaccinate after pregnancy.</h1>
    </div>
    </>

}

export default Conditions