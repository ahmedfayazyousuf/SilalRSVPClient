import './reg.css'
import { useEffect } from "react";
import React, { useState } from 'react';
// import {useLocation} from 'react-router-dom'
import nislap from "./nislap.png";
import nismob from "./nismob.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Registration = () => {
    // const {state} = useLocation();
    // const {id,name} = state;
    const { user_id } = useParams();

    const [name,setName] = useState("");


    const history = useNavigate();
    const [user,setUser] = useState({
         firstname:"", surname:"", city:"", opdiv:"", jobtitle:"", email:"", mob:"", gender:"", smoking:"", preferences:"", dietreq:"", physcon:""
    });

    let firstname, value, gender;

    const handleInputs = (e) => {
        console.log(e);
        firstname = e.target.name;
        value = e.target.value;

        setUser({...user, [firstname]:value})
    }

    function onSubmit(){
        history("/Registration2",{state:{user:user,id:user_id}})
    }

    async function getData(){

        try {
            var status = "Accepted"
            axios.put("https://rsvpadminserver.azurewebsites.net/user_update", {
               user_id,
               status
           })
       } catch (error) {
           console.log(error);
       }


        try {
            const res = await fetch(`https://rsvpadminserver.azurewebsites.net/user_one/${user_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    
        const data = await res.json();
    
        console.log(data[0].Name)
        setName(data[0].Name);
    
       } catch (error) {       
           console.log(error);
       }
    }

    useEffect(() =>{
        document.getElementById('navigator').style.opacity = 0;
        document.getElementById('navigator').style.display = 'none';

        
        getData();

        if(window.innerWidth <= 600){
            document.getElementById('head').setAttribute("src",nismob)
        }
        // eslint-disable-next-line
    },[])

    function onlyOne(e) {
        var checkm = document.getElementById('checkm');
        var checkf = document.getElementById('checkf');
        // checkm.checked = !checkm.checked 
        // checkf.checked = !checkf.checked 
        // console.log(checkbox)

        if(e === 'm'){
            console.log("lol")
            
            checkf.checked = false
            
            gender = "gender";
            value = "Male";
            setUser({...user, [gender]:value})
        }

        if(e === 'f'){
            console.log("lil")
            
            checkm.checked = false
            firstname = "gender";
            value = "Female";
            setUser({...user, [gender]:value})
        }



    }

    function onlyOnetwo(e) {
        var checkm = document.getElementById('checkmd');
        var checkf = document.getElementById('checkfd');
        // checkm.checked = !checkm.checked 
        // checkf.checked = !checkf.checked 
        // console.log(checkbox)

        if(e === 'm'){
            console.log("lol")
            
            checkf.checked = false
            
            firstname = "gender";
            value = "Male";
            setUser({...user, [firstname]:value})
        }

        if(e === 'f'){
            console.log("lil")
            
            checkm.checked = false
            firstname = "gender";
            value = "Female";
            setUser({...user, [firstname]:value})
        }



    }

    return (
        <div style={{justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}}>
        
        <div style={{display: 'flex', width: '100%'}}>
            <img id='head' style={{height:'100%', marginBottom:"5px"}} src={nislap} alt="Nissan Laptop Cover"/>
        </div>


        <div style={{textAlign: 'center'}}>
            <h3 style={{padding: '0', margin: '0'}}>TODAY.</h3>
            <h3 style={{padding: '0', margin: '0'}}>TOGETHER.</h3>
            <h3 style={{padding: '0', margin: '0'}}>TO THE FUTURE.</h3>
            <h5 style={{padding: '0', margin: '0', fontSize: '10px', marginBottom: '10px'}}>NISSAN AFTERSALES CONFERENCE</h5>
        </div>
        
        <div style={{textAlign: 'center', paddingTop: '10px', width:"100%", alignItems:"center", justifyContent:"center"}}>
            <p style={{padding: '0', margin: '0'}}>Hello {name},</p>
            <p style={{paddingRight:"5%", paddingLeft:"5%", marginBottom: '25px'}}>Glad to see you again! Please key in some information to confirm your attendance</p>
        </div>

        <div className="flex-container" style={{display:'flex', padding:'0', margin: '0', justifyContent: 'center', width: '100%',marginBottom: '20px'}}>
            <div className="flex-container2" style={{display:'flex', padding:'0', margin: '0', justifyContent: 'center', width: '100%'}}>

                <div className="mobileview">
                    <div className="block">
                        <label>Title</label>
                        <select type="text" name="smoking" id="smoking" value={user.smoking} onChange={handleInputs} style={{backgroundColor:'#ebebeb', borderColor: 'black', borderWidth: '1px'}} required>
                            <option selected value=""></option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                        </select>
                    </div>
                    
                    <div className="block">
                        <label>First Name</label>
                        <input type="text" name="firstname" id="firstname" value={user.firstname} onChange={handleInputs} required/>
                    </div>

                    <div className="block">
                        <label>Surname</label>
                        <input type="text" name="surname" id="surname" value={user.surname} onChange={handleInputs} required/>
                    </div>

                    <div className="block">
                        <label>City</label>
                        <input type="text" name="city" id="city" value={user.city} onChange={handleInputs} required/>
                    </div>

                    <div className="block">
                        <label>Company Name</label>
                        <input type="text" name="opdiv" id="opdiv" value={user.opdiv} onChange={handleInputs} required/>
                    </div>

                    <div className="block">
                        <label>Job Title</label>
                        <input type="text" name="jobtitle" id="jobtitle" value={user.jobtitle} onChange={handleInputs} required/>
                    </div>

                    <div className="block">
                        <label>Email Address</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleInputs} required/>
                    </div>

                    <div className="block">
                        <label>Mobile</label>
                        <input type="number" name="mob" id="mob" value={user.mob} onChange={handleInputs} required/>
                    </div>

                    <div className="flex-container2"  style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10px', display:"flex"}}>
                        <div  style={{display:"flex",flexDirection:"row"}}>
                            <label className="labelx">Gender</label>  
                            <label className="labelx"><input id='checkm' style={{marginRight: '10px'}} value="m" onClick={(e)=>{onlyOne(e.target.value)}} type="checkbox"/>Male</label>
                            <label className="labelx"><input id='checkf' style={{marginRight: '10px'}} value="f" onClick={(e)=>{onlyOne(e.target.value)}} type="checkbox"/>Female</label>
                        </div>
                    </div>

                </div>

                <div className="flex-child" >
                    <div className="block">
                        <label>Title</label>
                        <select type="text" name="title" id="title" value={user.title} onChange={handleInputs} style={{backgroundColor:'#ebebeb', borderColor: 'black', borderWidth: '1px'}} required>
                            <option selected value=""></option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                        </select>
                    </div>

                    <div className="block">
                        <label>First Name</label>
                        <input type="text" name="firstname" id="firstname" value={user.firstname} onChange={handleInputs} required/>
                    </div>

                    <div className="block">
                        <label>Surname</label>
                        <input type="text" name="surname" id="surname" value={user.surname} onChange={handleInputs} required/>
                    </div>

                    <div className="block">
                        <label>City</label>
                        <input type="text" name="city" id="city" value={user.city} onChange={handleInputs} required/>
                    </div>

                    <div className="block">
                        <label>Company Name</label>
                        <input type="text" name="opdiv" id="opdiv" value={user.opdiv} onChange={handleInputs} required/>
                    </div>
                </div>

                <div className="flex-child" style={{}}>
                    <div className="block">
                        <label>Job Title</label>
                        <input type="text" name="jobtitle" id="jobtitle" value={user.jobtitle} onChange={handleInputs} required/>
                    </div>

                    <div className="block">
                        <label>Email Address</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleInputs} required/>
                    </div>

                    <div className="block">
                        <label>Mobile</label>
                        <input type="number" name="mob" id="mob" value={user.mob} onChange={handleInputs} required/>
                    </div>

                    <div className="flex-container2"  style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10px', display:"flex"}}>
                        <div  style={{display:"flex",flexDirection:"row"}}>
                            <label className="labelx">Gender</label>  
                            <label className="labelx"><input id='checkmd' style={{marginRight: '10px'}} value="m" onClick={(e)=>{onlyOnetwo(e.target.value)}} type="checkbox"/>Male</label>
                            <label className="labelx"><input id='checkfd' style={{marginRight: '10px'}} value="f" onClick={(e)=>{onlyOnetwo(e.target.value)}} type="checkbox"/>Female</label>
                        </div>
                    </div>
                </div>

                <div className='hidden' style={{width:"10%"}}>

                </div>
            </div>
        </div>
        <div className="confirmobutton" style ={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <button className="confirmer" onClick = {onSubmit} style={{width: '120px'}}>
                Confirm
            </button>
        </div>
        </div>
    )
}

export default Registration