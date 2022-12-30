import React from 'react'

function NightModeAlert(props) {
    return (
        <>
            {props.nightMode && <div className="alert alert-dark" role="alert">
                {props.nightMode.message}
            </div>}
        </>
    )
}

export default NightModeAlert