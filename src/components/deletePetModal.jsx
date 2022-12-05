import React, { Component } from 'react';
import './addPetModal.scss';
import './deletePetModal.scss';

class DeletePetModal extends Component {
    
    render() { 
        const { petNameValue, petTypeValue, petLikesValue, showDeleteModalState, onHideDeleteModal, onLikes, onSubmitDelete } = this.props;
        return (
            <div className={!showDeleteModalState ? "modal" : "modal fade show"} tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">
								Details about: { petNameValue }
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true" onClick={() => { onHideDeleteModal() }}>&times;</span>
							</button>
						</div>
						<div className="modal-body">
                            <p>Pet Type<span> { petTypeValue }</span></p>
                            <div className="like_adopt_container">
                                <div className="likes_container">
                                    <span>{ petLikesValue } Likes</span>
                                    <button className={ petLikesValue ? "btn btn-primary disabled" : "btn btn-primary"} onClick={() => { onLikes() }}>Like { petNameValue }</button>
                                </div>
                                <form>
                                    <button type="button" className="btn btn-primary" onClick={() => {onSubmitDelete()}}>
                                        Adopt {petNameValue}
                                    </button>
                                </form>
                            </div>
                        </div>
					</div>
				</div>
			</div>
        );
    }
}
 
export default DeletePetModal;