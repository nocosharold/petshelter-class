import React, { Component } from 'react';
import './addPetModal.scss';

class AddPetModal extends Component {
    render() { 
        const { showAddModalState, pet_name, value, onHideAddModal, onAddSubmit, onChangeField, onChangeType } = this.props;
        return (
			<div className={!showAddModalState ? "modal" : "modal fade show"} tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">
								Add Pet
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" onClick={() => { onHideAddModal() }}>&times;</span>
							</button>
						</div>
						<div className="modal-body">
                            <form onSubmit={() => { onAddSubmit() }}>
                                <label htmlFor="pet_name">Pet Name
                                    <input type="text" id="pet_name" name="pet_name" value={ pet_name } onChange={(event) => {onChangeField(event)}}/>
                                </label>
                                <label htmlFor="pet_type">Pet Type
                                    <select name="pet_type" id="pet_type" value={value} onChange={(event) => {onChangeType(event)}}>
                                        <option value="Pig">Pig</option>
                                        <option value="Cat">Cat</option>
                                        <option value="Dog">Dog</option>
                                        <option value="Duck">Duck</option>
                                        <option value="Penguin">Penguin</option>
                                    </select>
                                </label>
                                <button type="button" className="btn btn-primary" onClick={(event) => {onAddSubmit(event)}}>
                                    Add Pet
                                </button>
                            </form>
                        </div>
					</div>
				</div>
			</div>
		);
    }
}
 
export default AddPetModal;