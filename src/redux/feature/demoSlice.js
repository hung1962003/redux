// goi moi state la Slice

import { createSlice } from "@reduxjs/toolkit";

// quan li so

// default value
const initialValue = 0; // = useState(initialValue);

const demoSlice = createSlice({
    name: 'demo',
    initialState: initialValue,
    reducers:{
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        multiply: (state, action) => state * action.payload,
        divide: (state, action) => state / action.payload,
        reset: (state) => initialValue,
    }
 });
 export const { increment, decrement, multiply, divide, reset } = demoSlice.actions;
 export default demoSlice.reducer;