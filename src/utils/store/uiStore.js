import { createSlice } from '@reduxjs/toolkit'
import themeEnum from '../../enums/themeEnum'

export const uiStore = createSlice({
  name: 'uiStore',
  initialState: {
    theme: themeEnum.DARK,
    screenType: {
      type: null,
      width: null,
      height: null
    }
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload
    },
    setScreenType: (state, action) => {
      state.screenType = action.payload
    }
  },
})

export const { changeTheme, setScreenType } = uiStore.actions;

export default uiStore.reducer