import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        setMenuClose: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        setMenuClose: (state, action) => {
            state.isMenuOpen = false
        }
    }
})



export default appSlice.reducer

export const { toggleMenu, setMenuClose } = appSlice.actions;