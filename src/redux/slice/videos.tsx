import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IVideos {
  videos: any;
}

const initialState: IVideos = {
  videos: [],
};

export const videosReducer = createSlice({
  name: "videos playerlists",
  initialState,
  reducers: {
    setVideos: (state, action: PayloadAction<any[]>) => {
      state.videos = action.payload;
    },
  },
});

export const { setVideos } = videosReducer.actions;
export default videosReducer.reducer;
