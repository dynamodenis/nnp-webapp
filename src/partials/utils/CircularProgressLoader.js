import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react'

function CircularProgressLoader() {
    return (
        <div className="circular_progress">
            <div className="progress_container">
                <CircularProgress color="inherit" />
            </div>   
        </div>
    )
}

export default CircularProgressLoader
