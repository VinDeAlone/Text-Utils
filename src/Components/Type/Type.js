import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { createText } from '../../Redux/Actions/text'
import {emptyDisplay} from '../../Redux/Actions/decodeActions'


const Type = () => {

    const [text, setText] = useState('')

    let dispatch = useDispatch()

    let setTextHandle = () => {
        dispatch(createText(text))
        dispatch(emptyDisplay())
    }

    let clearHandler = () => {
        setText("")
    }

    let copyHandler = () => {
        navigator.clipboard.writeText(text)
    }

    let upHandler = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    let loHandler = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={3} justifyContent='space-between'>
                    <Grid item>
                        <img src="https://zdblogs.zohowebstatic.com/sites/creator/decode/files/decode-logo-og.png" alt="" height="100px" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" color="initial" align='center'>
                            Text :
                        </Typography>
                    </Grid>
                    <Grid item>
                        <textarea style={{ height: "200px", width: "650px" }} name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        <div>
                            <Button variant="text" color="primary" onClick={setTextHandle}>
                                Decode
                            </Button>
                            <Button variant="text" color="primary" onClick={clearHandler}>
                                Clear
                            </Button>
                            <Button variant="text" color="primary" onClick={copyHandler}>
                                Copy
                            </Button>
                            <Button variant="text" color="primary" onClick={upHandler}>
                                Upper case
                            </Button>
                            <Button variant="text" color="primary" onClick={loHandler}>
                                Lower case
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Type
