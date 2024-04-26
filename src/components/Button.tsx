import React from 'react'

interface ButtonProps {
    label: string,
    onclick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void> | void;
}

const Button: React.FC<ButtonProps> = ({ label, onclick }) => {
    return (
        <div>
            <button className=' bg-black text-white rounded-lg px-10 py-2' onClick={onclick}>{label}</button>
        </div>
    )
}

export default Button