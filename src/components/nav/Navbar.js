import React from 'react'
import './Navbar.css'
import Profile from "./Profile";
import Skill from "./Skill";
import Hobbies from "./Hobbies";

const Navbar = () => {
    return (
        <div className="cv-navbar">
            <Profile/>
            <Skill/>
            <Hobbies/>
        </div>
    )
}

export default Navbar