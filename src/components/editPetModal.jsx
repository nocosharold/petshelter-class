import React, { Component } from 'react'
import './addPetModal.scss';

class EditPetModal extends Component {
    
    render() { 
        const { 
            _id, 
            petNameValue, 
            petTypeValue, 
            showEditModalState,
            onHideEditModal, 
            onSubmitEdit, 
            onChangeType, 
            onEditSubmit 
        } = this.props;

        return (
			<div className={!showEditModalState ? "modal" : "modal fade show"} tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">
								Edit Details: { petNameValue }
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" onClick={() => { onHideEditModal() }}>&times;</span>
							</button>
						</div>
						<div className="modal-body">
                            <form onSubmit={() => { onSubmitEdit(_id) }}>
                                <label htmlFor="pet_type">Pet Type
                                    <select name="pet_type" id="pet_type" value={ petTypeValue } onChange={(event) => {onChangeType(event)}}>
                                        <option value="Pig">Pig</option>
                                        <option value="Cat">Cat</option>
                                        <option value="Dog">Dog</option>
                                        <option value="Duck">Duck</option>
                                        <option value="Penguin">Penguin</option>
                                    </select>
                                </label>
                                <button type="button" className="btn btn-primary" onClick={(event) => {onEditSubmit(event)}}>
                                    Save Changes
                                </button>
                            </form>
                        </div>
					</div>
				</div>
			</div>
		);
    }
}
 
export default EditPetModal;