import React from 'react'

const BrakeImage = ({imageUrl}) => {
    return (
        <div style={{
            width: `100vw`,
            height: `30vh`,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: `cover`,
            backgroundPosition: `center center`
        }}></div>
    )
}

export default BrakeImage