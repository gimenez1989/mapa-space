import React, { useEffect } from 'react'
import { Map } from "maplibre-gl"
import { Container } from '@material-ui/core'
import useStyles from './styles'

const MapaSpace = ({ map }) => {
    const classes = useStyles()

    useEffect(() => {
        new Map({
            container: 'map',
            style: {
                version: 8,
                sources: {
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
                        id: "layermoon",
                        type: "raster",
                        source: "Moon",
                        layout: {
                            visibility: "visible"
                        }
                    }
                ]
            },
            zoom: 4,
            center: [0, 0]
        })

    }, [map])

    return (
        <Container className={classes.mapContainer} id="map" />
    )
}

export default MapaSpace