import React from 'react'
import './Subtitle.css'
import 'boxicons'

const Subtitle = () => {
    return (
        <>
            <div className="subtitle-container">
                <box-icon name='code' size='sm'></box-icon>
                    <div className="subtitle">developer | designer</div>
                        <box-icon name='code-alt' size='sm'></box-icon>
            </div>
        </>
    )
}

export default Subtitle
