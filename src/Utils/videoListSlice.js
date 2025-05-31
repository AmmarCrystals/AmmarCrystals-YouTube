import { createSlice } from "@reduxjs/toolkit";



const videoListSlice = createSlice({
    name: 'videoList',
    initialState: {
        videoList: [],

    },
    reducers: {
        setVideoList: (state, action) => {
            state.videoList = action.payload;
        },

    }
})



export default videoListSlice.reducer;
export const { setVideoList } = videoListSlice.actions;