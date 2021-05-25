import React from 'react'
import { Link } from 'gatsby'

const Button = ({label, location, slugaction}) => {
    if (!label) return null

    return (
        <Link to={`${slugaction}`}>
            <div className="flex">
                <div className={`button bg-black uppercase ${location} hover:bg-gray-800 text-white inriasans-reg py-2 px-5 rounded-full`} style={{
                        fontSize: `.8rem`
                }}>
                        {label}
                </div>
            </div>
        </Link>
    )
}

export default Button