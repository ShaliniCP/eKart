import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        category:'Men',
        items:['Coats','Jackets','Party Wear','Shirts']
    },
    {
        category:'Women',
        items:['Coats','Jackets','Party Wear','Shirts']
    },
    {
        category:'Kids',
        items:['Coats','Jackets','Party Wear','Shirts']
    }
]
const accordianSlice=createSlice({
    name:'AccordionSlice',
    initialState
})
export default accordianSlice;