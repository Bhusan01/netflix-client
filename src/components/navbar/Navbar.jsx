import { Search, Notifications, ArrowDropDown} from '@material-ui/icons';
import React from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom'
import {useState, useContext} from 'react';
import {logout} from '../../authContext/apicalls';
import {AuthContext} from '../../authContext/AuthContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => {window.onscroll = null};
    }
    const {dispatch} = useContext(AuthContext)
    const handleClick = (e) =>{
        e.preventDefault()
        logout(dispatch)
    }
    return (
        <div className={isScrolled ? "scrolled navbar" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30" alt="IMAGE" />      
                    <Link to="/" className="link">
                    <span>Homepage</span>
                    </Link>
                     <Link to="/series" className="link">
                    <span className="mainLinks">Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                    <span className="mainLinks">Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30" alt="IMAGE"/>
                    <div className="profile">
                         <ArrowDropDown className="icon" />
                         <div className="options">
                             <span>Settings</span>
                             <span onClick={handleClick}>Logout</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
