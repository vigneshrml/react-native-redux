import {ADD, SUB, ADDCART, DELETECART} from "./actionTypes";

export const addtion = () => ({
    type : ADD
})

export const subtract = () => ({
    type : SUB
})


export const addcart = (data) => ({
    type : ADDCART,
    data : data     
})

export const deletecart = (data,i) => ({
    type : DELETECART,
    data : data,
    i : i     
})