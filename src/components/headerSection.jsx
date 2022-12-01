import React, { Component } from "react"
import pets_img from "../assets/img/pets_img.png"
import './headerSection.scss';

class headerSection extends Component {
    render() { 
        return (
            <header>
                <div className="headline_container">
                    <h1>Let's <span>Adopt</span></h1>
                    <h1>Don't <span>Shop</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque id lorem nisi.</p>
                </div>
                <img src={pets_img} alt="Photograph of Dog and Cat sat on the ground."/>
            </header>
        );
    }
}
 
export default headerSection;