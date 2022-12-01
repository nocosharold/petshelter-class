import React, { Component } from 'react';
import './addPetModal.scss';
import './deletePetModal.scss';

class DeletePetModal extends Component {
    state = {  } 
    render() { 
        return (
            <div className={this.getDeleteShowStatus()} tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">
								Details about: {this.props.petNameValue}
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" onClick={() => { this.props.onHideDeleteModal() }}>&times;</span>
							</button>
						</div>
						<div className="modal-body">
                            <p>Pet Type<span> {this.props.petTypeValue}</span></p>
                            <div className="like_adopt_container">
                                <div className="likes_container">
                                    <span>{this.props.petLikesValue} Likes</span>
                                    <button className="btn btn-primary" onClick={() => { this.props.onLikes() }}>Like {this.props.petNameValue}</button>
                                </div>
                                <form onSubmit={() => { this.props.onSubmitDelete(this.props._id) }}>
                                    <button type="button" className="btn btn-primary" onClick={(event) => {this.props.onDeleteSubmit(event)}}>
                                        Adopt {this.props.petNameValue}
                                    </button>
                                </form>
                            </div>
                        </div>
					</div>
				</div>
			</div>
        );
    }

    getDeleteShowStatus(){
        let modalClass = "modal fade";
        modalClass += (this.props.showDeleteModalState === false) ? "" : " show";
        return modalClass;
    }
}
 
export default DeletePetModal;