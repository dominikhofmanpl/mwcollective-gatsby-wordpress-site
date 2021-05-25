import React from 'react'
import LogoMWC from '../assets/logosvg.svg'

const Loading = () => {
    return (
        <div className="flex" style={{
            width: `100vw`,
            height: `100vh`
        }}>
            <img className="tracking-in-expand mx-auto my-auto" src={LogoMWC} alt="" srcSet="" style={{
                height: `4rem`
            }}/>
        </div>
    )
}

export default Loading