import React, { Component } from 'react';
import { getPets } from '../services/fakePetService';

class pets extends Component {
    state = { 
        pets: getPets()
    };

    handleDelete = (pet) => {
        console.log(pet);
        const pets = this.state.pets.filter(m => m._id !== pet._id);
        this.setState({ pets });
    }

    render() { 
        return (
            <table className="table">
                <tbody>
                    { this.state.pets.map( pet => (
                        <tr key={pet._id}>
                            <td>{pet.petName}</td>
                            <td>{pet.petType.name}</td>
                            <td><button onClick={() => this.handleDelete(pet)} className="btn btn-danger btn-sm">Adopt</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default pets;