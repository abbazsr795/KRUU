import PastRecords from "../Components/PastRecords"

let PastRecordsPage = ()=>{

    return <>
        <div>
            <h1 className="massivetext heading1 horizontalcenter">Past vaccines</h1>
            <br></br>
            <div className="futurevaccines ma1">
                <PastRecords/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <Footer/> */}
        </div>
    </>
}


export default PastRecordsPage