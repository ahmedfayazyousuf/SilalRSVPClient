import React from 'react';
import { useEffect } from 'react';
import silalblack from '../1_SILAL_ASSETS/silalgreen.png';
import { useParams } from "react-router-dom";

const Success = () => { 
    const { user_id } = useParams();


    useEffect(() =>{
        document.getElementById('navigator').style.opacity = 0;
        document.getElementById('navigator').style.display = 'none';
    },[])
    return (
        <>
            <div className="main">
                <div className="form-items">
                    <div style={{justifyContent: 'center', alignItems: 'center'}}>
                        <img id='head' style={{width: '150px'}} src={silalblack} alt="Nissan Laptop Cover"/>
                    </div>
                    <h1 className='thankk' style={{fontWeight:'1000', marginTop: '15px'}}>THANK YOU!</h1>

                    <h4 style={{fontSize:'16px'}}> Congratulations {user_id}!</h4>
                    <h4 style={{fontSize:'16px'}}>Thank you for completing your registration for the Silal Automated Packhouse Launching Ceremony.</h4>
                    <h4 style={{fontSize:'16px'}}>You will receive a confirmation email of your details shortly.</h4>
                    <h4 style={{fontSize:'16px'}}>We look forward to driving the future of customer service with you!</h4>
                </div>
            </div>
        </>
    )
}

export default Success