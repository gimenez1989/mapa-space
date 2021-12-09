import React, { useEffect, useState } from 'react'
import { Map } from "maplibre-gl"
import { Container, Drawer} from '@material-ui/core'
import useStyles from './styles'
import LayerButton from '../LayerButton'

const MapaSpace = () => {
    const [map, setMap] = useState(null)
    const classes = useStyles()
   

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
            <Drawer className={classes.drawer}
            variant="permanent"
            >
                {map && <LayerButton map={map} />}
            </Drawer>
        </Container >
    )
}

export default MapaSpace