import { configureStore } from "@reduxjs/toolkit";
import videos from "../slice/videos";

export const store = configureStore({
  reducer: { videos },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
