import { atom } from "recoil";


export let URL =atom({
    key:'LastURL',
    default:'/'
})

export let RenderComp = atom({
    key:'RenderComp',
    default: false
})