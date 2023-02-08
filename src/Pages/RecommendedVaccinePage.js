import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
// import React from "react";
import Footer from "../Components/Footer";
import { UserLogData } from "../States/UserRelated";
import { Switch } from "evergreen-ui"
import Select from 'react-select'

const RecommendedVaccinePage = () => {
    return <>
        <div className="stack">
            <h1 className="massivetext heading1 horizontalcenter">Recommended vaccines</h1>
            {/* <div className="choosefutureregion  stack">
                <h1>Planning to go somewhere?</h1>
                <div className="flexiblerow">
                    <p>Northern Asia</p>
                    <Switch height={24} />
                    <p>Central Asia</p>
                    <Switch height={24} />
                    <p>South America</p>
                    <Switch height={24} />
                    <p>Western Asia</p>
                    <Switch height={24} />
                    <p>Southern Asia</p>
                    <Switch height={24} />
                    <p>Eastern Asia</p>
                    <Switch height={24} />
                    <p>South Eastern Asia</p>
                    <Switch height={24} />
                    <p>Europe</p>
                    <Switch height={24} />
                    <p>Oceania</p>
                    <Switch height={24} />
                    <p>North America</p>
                    <Switch height={24} />
                    <p>Africa</p>
                    <Switch height={24} />
                </div> */}
            </div>
        </>
}

export default RecommendedVaccinePage