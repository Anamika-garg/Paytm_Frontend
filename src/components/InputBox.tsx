import React from 'react'

interface inputBoxProps {
    placeholder: string,
    label: string,
    type: string,
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<inputBoxProps> = ({ placeholder, label, type, onchange }) => {
    return (
        <div className=' flex flex-col'>
            <label className=' p-1 font-semibold' htmlFor={label}>{label}</label>
            <input className=' p-2 rounded-lg border border-gray-300' onChange={onchange} type={type} placeholder={placeholder} id={label} />
        </div>
    )
}

export default InputBox