import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import silalwhite from '../1_SILAL_ASSETS/silalwhite.png';

const Navbar = () => {
    const RenderMenu = () => {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/Invited" style={{fontWeight: '600'}}>
                        Invite 
                        </NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink className="nav-link" to="/Accepted" style={{fontWeight: '600'}}>
                        Accepted
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Rejected" style={{fontWeight: '600'}}>
                        Rejected
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/NoReply" style={{fontWeight: '600'}}>
                        Unanswered
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Attended" style={{fontWeight: '600'}}>
                        Attended
                        </NavLink>
                    </li>
                </>
            )
    }
    return (
    <nav id='navigator' className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#00443F', padding: '0', margin: '0'}} >   
        <NavLink className="navbar-brand" to="/">
            <img style={{marginLeft:'15px', width: '42px', height: '40px', marginTop: '5px', marginBottom: '5px'}} src={silalwhite} alt="the hanging house logo"/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse divvery" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <RenderMenu />
            </ul>
        </div>
    </nav>
  )
}

export default Navbar