import { atom } from "recoil";

export let UserLog = atom({
    key:"UserLog",
    default: false
})

export let UserLogData = atom({
    key:"UserLogData",
    default:{
        email:'',
        
    }
})