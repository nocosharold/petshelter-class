import React, { Component } from 'react';
import './navBar.scss';

class NavBar extends Component {
    
    render() { 
        return (
            <nav>
                {/* eslint-disable-next-line */}
                <a className="logo" href="#">PETSHELTER</a>
                <ul>
                    {/* eslint-disable-next-line */}
                    <li className="active"><a href="#">Home</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">Services</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">Events</a></li>
                    <li>
                        <button className="add_pet_btn" onClick={() => { this.props.onShowAddModal() }}>+ Add pet to Shelter</button>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default NavBar;