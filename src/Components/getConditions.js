import { useRecoilState } from "recoil"
import { userHelathConditions } from "../States/UserRelated"


let GetConditions = (healthconditions)=>{
    let [ ,setuserhealth] = useRecoilState(userHelathConditions)

    setuserhealth({
        diabetes: healthconditions,
        cld: healthconditions,
        hld: healthconditions,
        endstageRDorhd: healthconditions,
        asplenia: healthconditions,
        immunocompromised: healthconditions,
        hivcd4countl15p: healthconditions,
        hivcd4countg15p: healthconditions,

        preg: healthconditions,
        workhealthcare: healthconditions,
        alcholic: healthconditions,
        gay: healthconditions,
    })

}

export default GetConditions