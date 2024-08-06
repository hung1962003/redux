// luu danh sach task can lam

import { createSlice } from "@reduxjs/toolkit";

// default value
// Giá trị khởi tạo cho state
const initialValue=[];

// Tạo slice cho danh sách task cần làm
const todoSlice = createSlice({
    name: "todo",
    initialState: initialValue,
    reducers: {
        addTask: (state, action) => {
            //state.push(action.payload);
            const newTask = action.payload;//task moi them vo
            state.push(newTask);
            return state;//update new task
        },
        // addTask1: (state, action) => [...state, action.payload]
        removeTask: (state, action) => {
            const index =action.payload;
            state.splice(index, 1);// xoa vi tri index va tai vi tri do xoa 1 phan tu
            return state;
            //return state.filter(task => task.id!==action.payload.id);
        },
        updateTask: (state, action) => {
            return state.map(task => task.id===action.payload.id? {...task,...action.payload}:task);
        },
        toggle: (state, action) => {
            // Đổi trạng thái hoàn thành của task
            return state.map(task => 
                task.id === action.payload.id 
                ? { ...task, completed: !task.completed } 
                : task
            );
        },
        clear: () => {
            // Xóa tất cả các task
           return initialValue;
        },
        clean1:()  => initialValue
    }
})
export const { addTask, removeTask, updateTask ,clear,toogle} = todoSlice.actions;
export default todoSlice.reducer;