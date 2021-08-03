import React from 'react';
import './Home.css';
import Button from '../../components/Button/Button'
import face from '../../assets/face.png'
import Title from '../../components/Title/Title';

function Home () {
        return (
            <>
               <Title/>
               <Button/>
               <div>
                   <img src={face} alt="Picasso Like Face" className="home-image"/>
               </div>
            </>
        );
}
export default Home;