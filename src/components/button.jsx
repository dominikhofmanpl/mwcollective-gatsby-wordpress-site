import React from 'react'

const Button = ({label}) => {
    return (
        <div class="button bg-black uppercase hover:bg-gray-800 text-white inriasans-reg py-2 px-5 rounded-full" style={{
            fontSize: `.8rem`
        }}>
            {label}
        </div>
    )
}

export default Button