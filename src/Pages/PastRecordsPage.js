import Records from "../Components/PastRecords"

let PastRecords = ()=>{


    return <>
        <div>
            <h1 className="massivetext heading1 horizontalcenter">Past vaccines</h1>
            <br></br>
            <div className="futurevaccines ma1">
                <Records/>
                <div className="verticalcenter">
                    {/*In this place, a list of all upcoming vaccines will come*/}
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <Footer/> */}
        </div>
    </>
}


export default PastRecords