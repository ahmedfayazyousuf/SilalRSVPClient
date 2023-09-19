import { useEffect } from "react"
import { useState } from "react"
import axios from "axios";

const Accepted = () => {
    const [user, setUser] = useState([])

    const getData = async () =>{
        const res = await fetch(`https://rsvpadminserver.azurewebsites.net/user_accepted`, {
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

    function Confirm(id,user_id){
        console.log(user_id)
        try {
            var status = "Attended"
            axios.put("https://rsvpadminserver.azurewebsites.net/user_update", {
               user_id,
               status
           })
       } catch (error) {
        console.log(error);
    }
        document.getElementById(`${id}`).remove();
    }
    
    return(
        <>
            <div className="invitebutton">
                <div style={{width: '100%'}}>
                    <h1 className="header" style={{color: '#00443F', fontWeight: '900', marginTop: '10px'}}>ACCEPTED</h1>
                </div>
            </div>

            <div className="mainn">
                <div className="white" style={{width: '100%', overflow: 'hidden'}}>
                    <div style={{width: '100%', height: '70vh', overflowY: 'scroll', border: '2px solid #00443F'}}>
                        <table className="table table-hover" style={{color: '#1D063C', border: '2px solid #00443F'}}>
                            <thead style={{position: 'sticky', top: '-1px'}}>
                                <tr>
                                    <th style={{color: 'white', backgroundColor: '#00443F'}}>User</th>
                                    <th style={{color: 'white', backgroundColor: '#00443F'}}>Email</th>
                                    <th style={{color: 'white', backgroundColor: '#00443F'}}>Status</th>
                                    <th style={{color: 'white', backgroundColor: '#00443F'}}>Attended</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((user,index) => {
                                    return <tr id={`${index}`} key={user._id} style={{justifyContent: 'center', alignSelf: 'center', height: '50px'}}>
                                    <td style={{width: '25%'}}>{user.Name}</td>
                                    <td style={{width: '25%'}}>{user.Email}</td>
                                    <td style={{width: '25%'}}>{user.Status}</td>
                                    <td style={{width: '25%'}}><button className="confirmi" onClick={() => {Confirm(index,user._id)}}>Confirm</button></td>
                                    </tr> 
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Accepted