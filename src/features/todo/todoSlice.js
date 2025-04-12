import { createSlice,nanoid } from "@reduxjs/toolkit";  // nanoid : to generate unique id

const initialState = {
    todos: [{id : 1 ,text :"Hello World"}]
}// initial state can be anything can be object or array

export const todoSlice =  createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id : nanoid() ,
                text :action.payload  // payload ek bject hai
            }
            state.todos.push(todo);
        },   // hamesha iske andar do chiz milega ek state ek action
         removeTodo : (state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
         },  // state current situation ka access deta hai aur action id provide karta hai
         
            
        
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer