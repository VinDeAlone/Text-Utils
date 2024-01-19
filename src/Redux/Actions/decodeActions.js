import {ENCODE_TO_BASE64, DECODE_BASE64, EMPTY_DIPLAY} from '../Constants'
import {base64Encode, base64Decode} from '../../Utils/decoders'

export const encodeToBase64Action = (data) => async (dispatch) => {
    try {
        let value = base64Encode(data)
        dispatch({
            type : ENCODE_TO_BASE64,
            data : value
        })
    } catch (error) {
        
    }
}

export const decodeToBase64Action = (data) => async (dispatch) => {
    try {
        let value = base64Decode(data)
        dispatch({
            type : DECODE_BASE64,
            data : value
        })
    } catch (error) {
        
    }
}

export const emptyDisplay = () => {
    return {
        type : EMPTY_DIPLAY
    }
}