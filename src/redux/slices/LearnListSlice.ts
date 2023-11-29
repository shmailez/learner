import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type LearnItem = {
    id: string,
    title: string,
    completed: boolean,
    important: boolean,
    description: string
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
                important: false,
                description: ''
            })
        },
        toggleCompleted(state, actions:PayloadAction<string> ) {
            const toggler = state.list.find(item => item.id === actions.payload)
            if (toggler) {
                toggler.completed = !toggler.completed
            }
        }
    }
})

export const {addItem, toggleCompleted} = LearnSlice.actions

export default LearnSlice.reducer