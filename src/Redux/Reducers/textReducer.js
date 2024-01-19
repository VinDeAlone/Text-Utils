import { SET_TEXT, PREVIOUS_TEXT, NEXT_TEXT } from '../Constants'

const initialState = {
    currentIndex: -1,
    array: []
}

export const textReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TEXT:
            return {
                currentIndex: state.array.length,
                array: [
                    ...state.array,
                    action.data
                ]
            }
        case PREVIOUS_TEXT:
            return {
                ...state,
                currentIndex: state.currentIndex - 1
            }
        case NEXT_TEXT:
            return {
                ...state,
                currentIndex: state.currentIndex + 1
            }
        default:
            return state
    }

}