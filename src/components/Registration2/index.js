import nislap from "./nislap.png";
import React, { useState } from 'react';
import {useLocation} from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Registration2 = () => {
    const {state} = useLocation();
    const {user,id} = state;
    const history = useNavigate();
    const [user2,setUser] = useState(user);
    // eslint-disable-next-line
    const { user_id } = useParams();

    let firstname, value;

    console.log(user2)

    const handleInputs = (e) => {
        console.log(e);
        firstname = e.target.name;
        value = e.target.value;

        setUser({...user2, [firstname]:value})
        console.log(user2);
    }

    useEffect(() =>{
        document.getElementById('navigator').style.opacity = 0;
        document.getElementById('navigator').style.display = 'none';
    },[])

//fetch api to transfer data
    const PostData = async (e) => {
        e.preventDefault();
        //object destruction so dont need to write user.name etc again and again
        history(`/success2`);
        const { firstname, surname, city, opdiv, jobtitle, email, mob, gender, smoking, preferences, dietreq, physcon } = user2;
        
        const res = await fetch("https://rsvpadminserver.azurewebsites.net/register_update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({ 
                // name: name doesnt need to be written because its the same name
                id, firstname, surname, city, opdiv, jobtitle, email, mob, gender, smoking, preferences, dietreq, physcon
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data) {
            window.alert("Invalid Credentials - If error persists, contact admin");
            console.log("Invalid Credentials - If error persists, contact admin");
        } else {

            console.log("Registration Successful! Welcome Aboard!");

            
        }

        try {
                
            axios.post("https://rsvpadminserver.azurewebsites.net/send_confirmation", {
                id, firstname, surname, city, opdiv, jobtitle, email, mob, gender, smoking, preferences, dietreq, physcon
           })
       } catch (error) {
           console.log(error);
       }

        history(`/success2/${user.firstname}`);

    }

    function onlyOne(e) {
        var checkv = document.getElementById('checkv');
        var checkveg = document.getElementById('checkveg');
        var checkno = document.getElementById('checkno');
        // checkm.checked = !checkm.checked 
        // checkf.checked = !checkf.checked 
        // console.log(checkbox)

        if(e === 'v'){
            console.log("lol")
            
            checkveg.checked = false
            checkno.checked = false
            
            firstname = "preferences";
            value = "Vegan";
            setUser({...user2, [firstname]:value})
        }

        if(e === 'veg'){
            console.log("lil")
            
            checkv.checked = false
            checkno.checked = false
            firstname = "preferences";
            value = "Vegetarian";
            setUser({...user2, [firstname]:value})
        }

        if(e === 'no'){
            console.log("lil")
            
            checkv.checked = false
            checkveg.checked = false
            firstname = "preferences";
            value = "No Other Requirements";
            setUser({...user2, [firstname]:value})
        }



    }

    return (
        <>
            <div style={{display: 'flex', width: '100%'}}>
            <img id='head' style={{height:'100%', marginBottom:"5px"}} src={nislap} alt="Nissan Laptop Cover"/>
        </div>

            <div style={{textAlign: 'center'}}>
            <h3 style={{padding: '0', margin: '0'}}>TODAY.</h3>
            <h3 style={{padding: '0', margin: '0'}}>TOGETHER.</h3>
            <h3 style={{padding: '0', margin: '0'}}>TO THE FUTURE.</h3>
            <h5 style={{padding: '0', margin: '0', fontSize: '10px', marginBottom: '10px'}}>NISSAN AFTERSALES CONFERENCE</h5>
        </div>

            <div style={{textAlign: 'center', paddingTop: '15px'}}>
                <p style={{margin: '10px'}}>Great! Please let us know if you have food allergies or any special preferences for your meals.</p>
                <input type="text" name="physcon" id="physcon" value={user.food} style={{width:"250px"}} onChange={handleInputs}/>
            </div>

            <div className="flex-container">
                <div style={{ padding: '20px',display:"flex",flexDirection:"column", width:"100%",justifySelf:"center",alignSelf:"center",textAlign:"center"}}>
                    <label className="labelx" style={{justifySelf:"center",alignSelf:"center",textAlign:"center"}}>Dietery Requirements</label>  
                    <div>
                        <label className="labelx"><input id='checkv' value="v" onClick={(e)=>{onlyOne(e.target.value)}} style={{marginRight: '10px'}} type="checkbox"/>Vegan</label>
                        <label className="labelx"><input id='checkveg' value="veg" onClick={(e)=>{onlyOne(e.target.value)}}  style={{marginRight: '10px'}} type="checkbox"/>Vegetarian</label>
                        <label className="labelx"><input id='checkno' value="no" onClick={(e)=>{onlyOne(e.target.value)}}  style={{marginRight: '10px'}} type="checkbox"/>No Specific Requirements</label>
                    </div>
                </div>
            </div>

            <div style ={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <button className="confirmer" onClick = {PostData} style={{width: '120px'}}>
                Confirm
            </button>
        </div>
        </>
    )
}

export default Registration2