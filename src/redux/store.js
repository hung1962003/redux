import { configureStore } from '@reduxjs/toolkit'
import demoSlice from './feature/demoSlice'
import todoSlice from './feature/todoSlice'
export const store = configureStore({
  reducer: {
    demo: demoSlice, // moi state nay la state cua demoSlice
    todo: todoSlice, // moi state nay la state cua todoSlice
  },
})