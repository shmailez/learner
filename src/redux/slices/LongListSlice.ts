import { createSlice } from "@reduxjs/toolkit";

type LongItem = {
    id: string,
    title: string,
    completed: boolean,
    important: boolean,
    description: string
}

type LongItemList = {
    long: LongItem[],
    loading: boolean, 
    error: string | null
}

const initialState:LongItemList = {
    long: [],
    loading: false,
    error: null
}

const LongListSlice = createSlice({
    name: 'longList', 
    initialState,
    reducers: {
        transItem(state, actions) {
            const obj = actions.payload
            if (obj) {
                state.long.push(obj)
            }
           
        }, 
        removeItem(state, actions) {
            state.long = state.long.filter(item => item.id !== actions.payload)
        }
    }
})

export const {transItem, removeItem} = LongListSlice.actions

export default LongListSlice.reducer