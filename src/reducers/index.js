import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    placeholder: (state = { app: true }, action) => state
})

export default rootReducer