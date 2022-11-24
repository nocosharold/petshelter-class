import React, { Component } from 'react';
import { getPets } from '../services/fakePetService';

class petList extends Component {
    state = { 
        pets: getPets()
    };

    handleDelete = (pet) => {
        console.log(pet);
        const pets = this.state.pets.filter(m => m._id !== pet._id);
        this.setState({ pets });
    }

    render() { 
        const { length: count } = this.state.pets;

        if(count === 0)
            return <p>There are no pets in the database.</p>;

        return (
            <>
                <p>Showing {count} pets in the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Pet Name</th>
                            <th>Pet Category</th>
                            <th></th>
                        </tr>
                    </thead>
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
            </>
        );
    }
}

export default petList;