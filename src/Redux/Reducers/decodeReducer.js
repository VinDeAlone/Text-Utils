import {ENCODE_TO_BASE64, DECODE_BASE64, EMPTY_DIPLAY} from '../Constants'

const initialState = ''

export const decodeReducer = (state = initialState, action) => {
    switch(action.type){
        case ENCODE_TO_BASE64 :
            return action.data
        case DECODE_BASE64 :
            return action.data
        case EMPTY_DIPLAY :
            return ""
        default : 
            return state
    }
}