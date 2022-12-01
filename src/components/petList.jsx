import React, { Component } from 'react';
import './petList.scss';

class PetList extends Component {
    render() { 
        const { length: count } = this.props.petData;

        if(count === 0)
            return <p>There are no pets in the database.</p>;

        return (
            <>
                <table className="table">
                    <tbody>
                        { this.props.petData.map( pet => (
                            <tr key={pet._id}>
                                <td>{pet.petName}</td>
                                <td>{pet.petType}</td>
                                <td>
                                    <button onClick={() => this.props.onShowDeleteModal(pet)} className="btn btn_details btn_action">Details</button>
                                    <button onClick={() => this.props.onShowEditModal(pet)} className="btn btn_edit btn_action">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default PetList;