import React from 'react'

const Button = ({ text, bgColor, borderRadius }) => {
    return (
        <button
            className={`${bgColor} shadow-md shadow-black max-w-[170px] w-full 
                        ${bgColor === 'bg-bgWhite' ? 'text-black' : 'text-white '} 
                        text-xl px-[15px] py-[5px] hover:tracking-wider transition-all duration-200 
                        ${borderRadius}`
                }>
            <span>{text}</span>
        </button>
    )
}

export default Button