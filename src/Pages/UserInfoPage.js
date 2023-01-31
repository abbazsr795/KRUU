import React from "react";
import HeadRoom from "../Components/HeadRoom";
import Footer from "../Components/Footer";
import  UserInfo from "../Components/UserInfo"
import { useRecoilValue } from "recoil";
import { UserLogData } from "../States/UserRelated";

const UserInfoPage = () => {

    let userdata = useRecoilValue(UserLogData)

    return <div className="verticalcenter">
            <HeadRoom/>
            <div className="horizontalcenter">
                <div className="lightblue card4 pa3">
                    <UserInfo email={userdata.email} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <Footer/>
                </div>
            </div>
        </div>
}

export default UserInfoPage