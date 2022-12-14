import React, { Component } from 'react';
import "./petList.scss";

class PetList extends Component {
    render() { 
        const { length: count } = this.props.petData;
        const { onShowDeleteModal, onShowEditModal } = this.props;
        if(!count)
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
                                    <button onClick={() => onShowDeleteModal(pet)} className="btn btn_details btn_action">Details</button>
                                    <button onClick={() => onShowEditModal(pet)} className="btn btn_edit btn_action">Edit</button>
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