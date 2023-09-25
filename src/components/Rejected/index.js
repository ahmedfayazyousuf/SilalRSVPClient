import { useEffect } from "react"
import { useState } from "react"
const Rejected = () => {
    const [user, setUser] = useState([])

    const getData = async () =>{
        const res = await fetch(`https://rsvpadminserver.azurewebsites.net/user_rejected`, {
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
    
    return(
        <>
            <div className="invitebutton">
                <div style={{width: '100%'}}>
                    <h1 className="header" style={{color: '#00443F', fontWeight: '900', marginTop: '10px'}}>REJECTED</h1>
                </div>
            </div>
            <div className="mainn">
                <div className="white" style={{width: '100%', overflow: 'hidden'}}>
                    <div style={{width: '100%', height: '70vh', overflowY: 'scroll', border: '2px solid #00443F'}}>
                        <table className="table table-hover" style={{color: '#1D063C', border: '2px solid #00443F'}}>
                            <thead style={{position: 'sticky', top: '-1px'}}>
                                <tr>
                                    <th style={{color: 'white', backgroundColor: '#00443F'}}>Email</th>
                                    <th style={{color: 'white', backgroundColor: '#00443F'}}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((user) => {
                                    return <tr key={user._id}>
                                    <td style={{paddingRight: '100px'}}>{user.Email}</td>
                                    <td>{user.Status}</td>
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

export default Rejected