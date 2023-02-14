import { atom } from "recoil";

export let UserLog = atom({
    key:"UserLog",
    default: false
})

export let userHelathConditions = atom({
    key: 'userHelathConditions',
    default: {
        diabetes: false,
        cld: false,
        hld: false,
        endstageRDorhd: false,
        asplenia: false,
        immunocompromised: false,
        hivcd4countl15p: false,
        hivcd4countg15p: false,

        preg: false,
        workhealthcare: false,
        alcholic: false,
        gay: false,
    }
})

export let UserLogData = atom({
    key:"UserLogData",
    default:{
        email:'',
        username:''
    }
})
