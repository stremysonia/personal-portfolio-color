import React from 'react';
import './Home.css';

const Home = () => {
        return (
            <>
                <div className="triangle-container">
                    <div className="triangle-1 shapes"></div>
                    <div className="triangle-2 shapes"></div>
                    <div className="triangle-3 shapes"></div>
                    <div className="triangle-4 shapes"></div>
                    <div className="triangle-5 shapes"></div>
                    <div className="triangle-6 shapes"></div>
                </div>
                    <div className="header-container">
                        <h1 className="header-title-top header">
                            <span className="header-name">St</span>
                            <span className="header-name symbol">.</span>
                        </h1>
                            <h4 className="header-subtitle">developer | designer</h4>
                                <h1 className="header-title-bottom header">Remy</h1>
            
                    </div>
            </>
        );
}
export default Home;