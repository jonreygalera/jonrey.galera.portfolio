import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import uiStoreReducer from './store/uiStore'

export default configureStore({
  reducer: {
    counter: counterReducer,
    uiStore: uiStoreReducer
  },
})