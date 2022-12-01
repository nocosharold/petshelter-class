import React, { Component } from 'react'
import './addPetModal.scss';

class EditPetModal extends Component {
    state = {  } 
    render() { 
         return (
			<div className={this.getEditShowStatus()} tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">
								Edit Details: {this.props.petNameValue}
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" onClick={() => { this.props.onHideEditModal() }}>&times;</span>
							</button>
						</div>
						<div className="modal-body">
                            <form onSubmit={() => { this.props.onSubmitEdit(this.props._id) }}>
                                <label htmlFor="pet_type">Pet Type
                                    <select name="pet_type" id="pet_type" value={this.props.petTypeValue} onChange={(event) => {this.props.onChangeType(event)}}>
                                        <option value="Pig">Pig</option>
                                        <option value="Cat">Cat</option>
                                        <option value="Dog">Dog</option>
                                        <option value="Duck">Duck</option>
                                        <option value="Penguin">Penguin</option>
                                    </select>
                                </label>
                                <button type="button" className="btn btn-primary" onClick={(event) => {this.props.onEditSubmit(event)}}>
                                    Save Changes
                                </button>
                            </form>
                        </div>
					</div>
				</div>
			</div>
		);
    }

    getEditShowStatus(){
        let modalClass = "modal fade";
        modalClass += (this.props.showEditModalState === false) ? "" : " show";
        return modalClass;
    }
}
 
export default EditPetModal;