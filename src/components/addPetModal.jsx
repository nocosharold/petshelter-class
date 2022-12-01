import React, { Component } from 'react';
import './addPetModal.scss';

class AddPetModal extends Component {
    render() { 
        return (
			<div className={this.getShowStatus()} tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">
								Add Pet
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" onClick={() => { this.props.onHideAddModal() }}>&times;</span>
							</button>
						</div>
						<div className="modal-body">
                            <form onSubmit={() => { this.props.onAddSubmit() }}>
                                <label htmlFor="pet_name">Pet Name
                                    <input type="text" id="pet_name" name="pet_name" value={this.props.pet_name} onChange={(event) => {this.props.onChangeField(event)}}/>
                                </label>
                                <label htmlFor="pet_type">Pet Type
                                    <select name="pet_type" id="pet_type" value={this.props.value} onChange={(event) => {this.props.onChangeType(event)}}>
                                        <option value="Pig">Pig</option>
                                        <option value="Cat">Cat</option>
                                        <option value="Dog">Dog</option>
                                        <option value="Duck">Duck</option>
                                        <option value="Penguin">Penguin</option>
                                    </select>
                                </label>
                                <button type="button" className="btn btn-primary" onClick={(event) => {this.props.onAddSubmit(event)}}>
                                    Add Pet
                                </button>
                            </form>
                        </div>
					</div>
				</div>
			</div>
		);
    }

    getShowStatus(){
        let modalClass = "modal fade";
        modalClass += (this.props.showAddModalState === false) ? "" : " show";
        return modalClass;
    }
}
 
export default AddPetModal;