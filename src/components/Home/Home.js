import React from 'react';
import silalblack from './silalblack.png'
const Home = () => { 

    return (
        <>
            <div className="main">
                <div className="form-items">
                    <div style={{justifyContent: 'center', alignItems: 'center'}}>
                        <img id='head' style={{width: '150px'}} src={silalblack} alt="Nissan Laptop Cover"/>
                    </div>
                    
                    <h1 style={{fontWeight:'1000', fontSize: '60px', marginTop: '5px'}}>WELCOME</h1>
                    <h4> To The Silal RSVP Application </h4>
                </div>
            </div>
        </>
    )
}

export default Home