import React from "react"

interface HeadingProps {
    label: string
}

const Heading: React.FC<HeadingProps> = ({ label }) => {
    return (
        <div>
            <h1 className=" text-2xl font-semibold">{label}</h1>
        </div>
    )
}

export default Heading