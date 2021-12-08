import React, { useEffect, useState } from 'react'
import { Map } from "maplibre-gl"
import { Container, Button, Box } from '@material-ui/core'
import useStyles from './styles'

const MapaSpace = () => {
    const [map, setMap] = useState(null)
    const [visibility, setVisibility] = useState(false)
    const classes = useStyles()

    const onChangeMoon  = () => {
        if (visibility === false) {
            map.setLayoutProperty("layermoon", "visibility", "visible")
            map.setLayoutProperty("layermars", "visibility", "none")
        }
        setVisibility(!visibility)
    }

    const onChangeMars  = () => {
        if (visibility === true) {
            map.setLayoutProperty("layermars", "visibility", "visible")
            map.setLayoutProperty("layermoon", "visibility", "none")
        }
        setVisibility(!visibility)
    }

    useEffect(() => {
        setMap(
            new Map({
                container: 'map',
                style: {
                    version: 8,
                    sources: {
                        Mars: {
                            type: "raster",
                            scheme: "tms",
                            tiles: [
                                "https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png",
                            ],
                            tileSize: 256,
                        },
                        Moon: {
                            type: "raster",
                            scheme: "tms",
                            tiles: [
                                "https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png",
                            ],
                            tileSize: 256,
                        }
                    },
                    layers: [
                        {
                            id: "layermars",
                            type: "raster",
                            source: "Mars",
                            layout: {
                                visibility: "visible"
                            }
                        },
                        {
                            id: "layermoon",
                            type: "raster",
                            source: "Moon",
                            layout: {
                                visibility: "none"
                            }
                        }
                    ]
                },
                zoom: 5,
                center: [0, 0]
            })
        )
    }, [])

    return (
        <Container className={classes.mapContainer} id="map">
            <Box>
                <Button className={classes.Moon}
                    onClick={() => {
                        onChangeMoon ()
                    }}>
                    <p>Moon</p>
                </Button>
            </Box>
             <Box>
               <Button className={classes.Mars}
                    onClick={() => {
                        onChangeMars()
                    }}>
                    <p>Mars</p>
                </Button>
            </Box>
        </Container >
    )
}

export default MapaSpace