import React from 'react';
import silalgreen from '../1_SILAL_ASSETS/silalgreen.png';
import '../1_SILAL_ASSETS/Silal.css';

const Home = () => { 

    return (
        <>
            <div className="main">
                <div className="form-items">
                    <div style={{justifyContent: 'center', alignItems: 'center'}}>
                        <img id='head' style={{width: '150px'}} src={silalgreen} alt="Nissan Laptop Cover"/>
                    </div>
                    
                    <h1 style={{fontWeight:'1000', fontSize: '55px', marginTop: '5px', color: '#00443F', overflow: 'hidden'}}>WELCOME</h1>
                    <h4 style={{color: '#00443F', fontSize: '20px'}}> To The Silal RSVP Application </h4>
                </div>
            </div>
        </>
    )
}

export default Home