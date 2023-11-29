import { createSlice } from '@reduxjs/toolkit'
import themeEnum from '../../enums/themeEnum'

export const uiStore = createSlice({
  name: 'uiStore',
  initialState: {
    theme: themeEnum.DARK,
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload
    }
  },
})

export const { changeTheme } = uiStore.actions;

export default uiStore.reducer