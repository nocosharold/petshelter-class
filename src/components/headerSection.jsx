/* REACT */
import React, { Component } from "react";
import PetsImg from "../assets/img/pets_img.png";

/* CSS */
import './headerSection.scss';

class headerSection extends Component {
    render() { 
        return (
            <header>
                <div className="headline_container">
                    <h1>Let's <span>Adopt</span></h1>
                    <h2>Don't <span>Shop</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque id lorem nisi.</p>
                </div>
                <img src={PetsImg} alt="Photograph of Dog and Cat sat on the ground."/>
            </header>
        );
    }
}
 
export default headerSection;