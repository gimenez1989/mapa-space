import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
    Moon: {
        background: 'blue',
        color: 'black',
        position: 'relative; z-index:1',
        fontSize: '10px',
        padding: '0',
        top: '50px',
        margin: '10px'
    },
    Mars: {
        background: 'red',
        color: 'black',
        fontSize: '10px',
        position: 'relative; z-index:1',
        padding: '0',
        top: '50px',
        margin: '10px'
        
    }
}))
