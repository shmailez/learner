import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type LearnItem = {
    id: string,
    title: string,
    completed: boolean,
    important: boolean,
    description: string
}

type LearnItemList = {
    find(arg0: (item: any) => any): any;
    list: LearnItem[],
    loading: boolean, 
    error: string | null
}

const initialState:LearnItemList = {
    list: [],
    loading: false,
    error: null,
    find: function (arg0: (item: any) => any) {
        throw new Error("Function not implemented.");
    }
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
        },
        updateDescription(state, actions){
            const obj = actions.payload
            let upItem = state.list.find(item => item.id === obj.id)
            if(upItem) {
            upItem.description = obj.description}
        },
        deleteItem(state, actions) {
            state.list = state.list.filter(item => item.id !== actions.payload)
        }
    }
})

export const {addItem, toggleCompleted, updateDescription, deleteItem} = LearnSlice.actions

export default LearnSlice.reducer