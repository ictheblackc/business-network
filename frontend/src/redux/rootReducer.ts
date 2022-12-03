import { combineReducers } from '@reduxjs/toolkit'
import test from './slices/test'
import user from "./slices/user";

const rootReducer = combineReducers({
    test,
    user,
})

export default rootReducer;