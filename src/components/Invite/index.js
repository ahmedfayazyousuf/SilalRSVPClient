import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Invited = () => {
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getData = async () => {
        const res = await fetch(`https://rsvpadminserver.azurewebsites.net/user_all`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await res.json();
    setUser(data)
    }
    useEffect(()=>{
        getData();
    },[])

    function sendMail() {
        var to = document.getElementById("email").value
        var name = document.getElementById("text").value
        try {
                
            axios.post("https://rsvpadminserver.azurewebsites.net/send_mail", {
               to,
               name,
           },{headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
    }})
       } catch (error) {
           console.log(error);
       }
       setShow(false);
    }
    return(
        <div>
            <div className="invitebutton">
                <div style={{width: '100%'}}>
                    <h1 className="header" style={{color: '#00443F', fontWeight: '900', marginTop: '10px'}}>INVITATIONS</h1>
                </div>
            </div>


            <div className="mainn">
                <div className="white" style={{width: '100%', overflow: 'hidden'}}>
                    <div style={{width: '100%', height: '60vh', overflowY: 'scroll', border: '2px solid #00443F'}}>
                        <table className="table table-hover" style={{color: '#1D063C', border: '2px solid #00443F'}}>

                            <thead style={{position: 'sticky', top: '-1px'}}>
                                <tr>
                                    <th style={{color: 'white', backgroundColor: '#00443F'}}>EMAIL</th>
                                    <th style={{color: 'white', backgroundColor: '#00443F'}}>STATUS</th>
                                </tr>
                            </thead>

                            <tbody>
                                {user.map((user) => {
                                    return <tr key={user._id}>
                                        <td>{user.Email}</td>
                                        <td>{user.Status}</td>
                                    </tr> 
                                })}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>


            <div style={{width: '100%', height: '20vh', display: 'flex', backGroundColor: 'yellow', flexDirection: 'row', justifyContent: 'right', alignItems: 'right', textAlign: 'right'}}>
                <div style={{paddingRight: '20px', paddingTop:'10px', marginRight:'30px', marginTop:'30px', width: '100%', display: 'flex', backGroundColor: 'yellow', flexDirection: 'row', justifyContent: 'right', alignItems: 'right', textAlign: 'right'}}>
                    <AddCircleIcon className="plussy" onClick={handleShow} style={{fontSize:"50px", backgroundColor: 'transparent', alignSelf:'right', transform: 'scale(1.7)' }}></AddCircleIcon>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{color:'#190039', fontWeight:'700'}}>Create Invite</Modal.Title>
                    </Modal.Header>

                    <Modal.Body style={{display: 'flex', flexDirection:'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                        <input className="c_title" id="email" type="email" placeholder="Enter User's Email"></input>
                        <input className="m_title" id="text" type="text" placeholder="Enter User's Name"></input>
                    </Modal.Body>

                    <Modal.Footer style={{justifyContent:'right', alignItems: 'right'}}>
                        {/* <Button onClick={handleClose} style={{backgroundColor: 'white', paddingLeft:'50px', paddingRight:'50px', border: '2px solid black', color: '#190039', fontWeight: '500'}}>
                            Close
                        </Button> */}
                        <Button onClick={sendMail} style={{backgroundColor:'black', paddingLeft:'90px', paddingRight:'90px' ,border: '2px solid black', fontWeight: '500'}}>
                            Send
                        </Button>
                    </Modal.Footer>
                </Modal>

                <canvas style={{display:"none"}} id='canvas' ></canvas>
            </div>


        </div>
    )
}

export default Invited