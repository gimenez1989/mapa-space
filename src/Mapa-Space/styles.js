import { makeStyles } from '@material-ui/styles'


export default makeStyles((theme) => ({
    mapContainer: {
        height: '10%',
        minHeight: '100vh',
        margin: 0,
        maxWidth: '100%',
        padding: 0,
        lineHeight: 0
    },
    Moon: {
        background: 'blue',
        color: 'white',
        position: 'relative; z-index:1'
    },
    Mars: {
        background: 'red',
        color: 'white',
        position: 'relative; z-index:1'
    }
}))
