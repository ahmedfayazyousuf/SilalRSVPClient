import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios";
const NoReply = () => {
    const [user, setUser] = useState([])

    const getData = async () =>{
        // await axios.get("http://localhost:4000/user_accepted").then(res => {
        //     console.log(res.data);
        //     setUser([res.data]);
        // });
        const res = await fetch(`https://rsvpadminserver.azurewebsites.net/user_na`, {
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

    function sendAll(){
        // eslint-disable-next-line 
        user.map((user) => {
            try {
                var to = user.Email;
                // eslint-disable-next-line 
                var message = "reminder";
                var id = user._id;
                var name = user.Name

                axios.post("https://rsvpadminserver.azurewebsites.net/send_all", {
                   to,
                   id,
                   name
               })
               console.log("sent")
            //    eslint-disable-next-line 
               return 
           } catch (error) {
               console.log(error);
            //    eslint-disable-next-line 
               return
           }
        })
        
    }
    
    return(
        <>
            <div className="invitebutton">
                <div style={{width: '100%'}}>
                    <h1 className="header" style={{color: '#00443F', fontWeight: '900', marginTop: '10px'}}>UNANSWERED</h1>
                </div>

                <div style={{display: 'flex', width:'30%', justifyContent: 'flex-end', marginTop:'-5px'}}>
                    <CircleNotificationsIcon className="bell" onClick={sendAll}></CircleNotificationsIcon>
                </div>            
            </div>

            <div className="mainn" style={{marginTop: '-15px'}}>
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
                                    <td>{user.Email}</td>
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

export default NoReply