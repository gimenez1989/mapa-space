import React from 'react'
import { Container, Button, Box } from '@material-ui/core'
import useStyles from './styles'

const LayerButton = ({ map }) => {
    const classes = useStyles()

    const onChangeMoon = () => {
        map.setLayoutProperty("layermoon", "visibility", "visible")
        map.setLayoutProperty("layermars", "visibility", "none")
    }

    const onChangeMars = () => {
        map.setLayoutProperty("layermars", "visibility", "visible")
        map.setLayoutProperty("layermoon", "visibility", "none")
    }

    return (
        <Container>
            <Box>
                <Button className={classes.Moon}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        onChangeMoon()
                    }}>
                    <p>Moon</p>
                </Button>
            </Box>
            <Box>
                <Button className={classes.Mars}
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        onChangeMars()
                    }}>
                    <p>Mars</p>
                </Button>
            </Box>
        </Container>
    )
}

export default LayerButton
