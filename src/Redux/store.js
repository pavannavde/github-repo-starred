
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Slice';

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
