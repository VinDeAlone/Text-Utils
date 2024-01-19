import {combineReducers} from 'redux'
import {textReducer} from './textReducer'
import {decodeReducer} from './decodeReducer'

export const rootReducer = combineReducers({
    textReducer,
    decodeReducer
})