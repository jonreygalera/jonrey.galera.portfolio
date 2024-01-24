import { configureStore } from '@reduxjs/toolkit'
import uiStoreReducer from './store/uiStore'

export default configureStore({
  reducer: {
    uiStore: uiStoreReducer
  },
})