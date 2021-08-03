import React from 'react'
import './Title.css'
import 'boxicons'

const Title = () => {
    return (
        <>
            <div className="title">
                <span className="title-letters-top">
                    <span className="letter-flicker">S</span>
                    <span>o</span>
                    <span className="letter-flicker">n</span>
                    <span className="letter-lowercase">i</span>
                    <span className="letter-flicker">a</span>
                </span>
                    <div className="title-letters-bottom">
                        <span>S</span>
                        <span className="letter-flicker">t</span>
                        <span className="title-symbol">.</span>
                        <span className="letter-flicker">R</span>
                        <span>e</span>
                        <span className="letter-flicker">m</span>
                        <span className="letter-falling">y</span>
                            <div className="home-subtitle">
                                <span>developer | designer</span>
                            </div>
                    </div>
            </div>
        </>
    )
}

export default Title
