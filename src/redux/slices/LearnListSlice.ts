import { createSlice } from "@reduxjs/toolkit";

type LearnItem = {
    id: string,
    title: string,
    completed: boolean,
    important: boolean
}

type LearnItemList = {
    list: LearnItem[],
    loading: boolean, 
    error: string | null
}

const initialState:LearnItemList = {
    list: [],
    loading: false,
    error: null
}

const LearnSlice = createSlice({
    name:'learnList', 
    initialState,
    reducers: {
        addItem(state, actions) {
            state.list.push({
                id: new Date().toISOString(),
                title: actions.payload, 
                completed: false, 
                important: false
            })
        }
    }
})

export const {addItem} = LearnSlice.actions

export default LearnSlice.reducer