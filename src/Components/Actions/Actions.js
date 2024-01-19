import React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'
import { previousText, nextText } from '../../Redux/Actions/text'
import {encodeToBase64Action, decodeToBase64Action} from '../../Redux/Actions/decodeActions'






const Actions = () => {

    let currentIndex = useSelector(state => state.textReducer.currentIndex)
    let lastIndex = useSelector(state => state.textReducer.array.length - 1)
    const text = useSelector(state => state.textReducer.array[currentIndex])

    let dispatch = useDispatch()

    let previousData = () => {
        dispatch(previousText())
    }

    let nextData = () => {
        dispatch(nextText())
    }

    let base64Encoder = () => {
        dispatch(encodeToBase64Action(text))
    }

    let base64Decoder = () => {
        dispatch(decodeToBase64Action(text))
    }

    return (
        <div>
            {currentIndex < 1 ? "" : <Button style={{ margin: "2px" }} variant="contained" color="primary" onClick={previousData} >
                Previous
            </Button>}
            {currentIndex == lastIndex ? "" : <Button style={{ margin: "2px" }} variant="contained" color="primary" onClick={nextData} >
                next
            </Button>}
            {lastIndex == -1 ? "" :
                <>
                    <Button style={{ margin: "2px" }} variant="contained" color="primary" onClick={base64Encoder}>
                        Encode base64
                    </Button>
                    <Button style={{ margin: "2px" }} variant="contained" color="primary" onClick={base64Decoder}>
                        Decode base64
                    </Button>
                </>
            }
        </div>
    )
}

export default Actions
