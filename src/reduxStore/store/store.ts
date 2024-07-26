import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import adminErrorMessageReducer from "../reducer/adminErrorMessageReducer";
import { dashboardApi } from "../../services/dashboard";
const rootReducer = combineReducers({
 
  adminErrorMessageReducer: adminErrorMessageReducer,
 
  [dashboardApi.reducerPath]:dashboardApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([
      
      dashboardApi.middleware,
    ]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;