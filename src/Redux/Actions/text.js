import {SET_TEXT, PREVIOUS_TEXT, NEXT_TEXT} from '../Constants'

export const createText = (data) => async (dispatch) => {
    try {
        dispatch({
            type : SET_TEXT,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}

export const previousText = () => async (dispatch) => {
    try {
        dispatch({
            type : PREVIOUS_TEXT
        })
    } catch (error) {
        console.log(error)
    }
}

export const nextText = () => async (dispatch) => {
    try {
        dispatch({
            type : NEXT_TEXT
        })
    } catch (error) {
        console.log(error)
    }
}