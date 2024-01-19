import React from 'react'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'



const Display = () => {

    let currentIndex = useSelector(state => state.textReducer.currentIndex)

    const displayText = useSelector(state => state.decodeReducer)
    const text = useSelector(state => state.textReducer.array[currentIndex])

    let copyText = () => {
        navigator.clipboard.writeText(displayText)
    }

    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={1} justifyContent='space-between'>
                    <Grid border="2px" item>
                        {currentIndex == -1 ? "" : <Button variant="contained" color="primary" onClick={copyText}>
                            Copy
                        </Button>}
                        <div>
                            {text}
                        </div>
                    </Grid>
                    <Grid border="2px" item>
                        {displayText === '' ? "" : <Button variant="contained" color="primary" onClick={copyText}>
                            Copy
                        </Button>}
                        <div>
                            {displayText}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Display
