import React, { Component } from 'react';

import "./index.scss"
import PetList from './components/petList';
import NavBar from './components/navBar';
import AddPetModal from './components/addPetModal';
import EditPetModal from './components/editPetModal';
import DeletePetModal from './components/deletePetModal';
import HeaderSection from './components/headerSection';
import { getPets } from '../src/services/fakePetService';
import { v4 as uuidv4 } from 'uuid';
import "./assets/fonts/DoHyeon-Regular.ttf";
import "./assets/fonts/Kanit-Regular.ttf";

import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      add_modal: false,
      edit_modal: false,
      delete_modal: false,
      pets: getPets(),
      new_pet: "",
      pet_name: "",
      pet_type: "Pig",
      likes: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }

  handleShowAddModal = () => {
    this.setState({ add_modal: true });
  }
  
  handleShowEditModal = (pet) => {
    this.setState({ 
      edit_modal: true,
      id: pet._id,
      pet_name: pet.petName,
      pet_type: pet.petType
    });

  }
  
  handleShowDeleteModal = (pet) => {
    this.setState({ 
      delete_modal: true,
      id: pet._id,
      pet_name: pet.petName,
      pet_type: pet.petType,
      likes: pet.likes
    });
  }

  handleHideAddModal = () => {
    this.setState({ add_modal: false });
  }
  
  handleHideEditModal = () => {
    this.setState({ edit_modal: false });
  }
  
  handleHideDeleteModal = () => {
    this.setState({ delete_modal: false });
  }

  handleChange = (event) => {
    this.setState({ pet_name: event.target.value });
  }

  handleChangeType = (event) => {
    this.setState({ pet_type: event.target.value });
  }

  handleAddSubmit = (event) => {
    this.setState({
      pets: [...this.state.pets,
        { _id: uuidv4(),
          petName: this.state.pet_name, 
          petType: this.state.pet_type,
        }
      ],
      pet_name: "",
      add_modal: false,
    });
    event.preventDefault();
  }
  
  handleEditSubmit = () => {
    this.setState({ 
      edit_modal: false,
      edited_pets: this.state.pets.forEach(pet => {
        if(pet._id === this.state.id){
          pet.petType = this.state.pet_type
        }
      })
    });
  }

  handleDelete = () => {
      const pets = this.state.pets.filter(m => m._id !== this.state.id);
      this.setState({ pets, delete_modal: false, });
  }

  handleLikes = () => {
    this.setState({ 
      edit_modal: false,
      edited_pets: this.state.pets.forEach(pet => {
        if(pet._id === this.state.id){
          pet.likes = ++this.state.likes
        }
      })
    });
  }

  render() {
    return (
      <div>
        <main className="container">
          <NavBar onShowAddModal={this.handleShowAddModal}/>
          <HeaderSection />
          <PetList 
            onShowDeleteModal={ this.handleShowDeleteModal } 
            petData={ this.state.pets } 
            onShowEditModal={this.handleShowEditModal}/>
          <AddPetModal 
            showAddModalState={this.state.add_modal} 
            onHideAddModal={this.handleHideAddModal} 
            onAddSubmit={this.handleAddSubmit}
            onChangeField={this.handleChange}
            onChangeType={this.handleChangeType}
            />
          <EditPetModal
            showEditModalState={this.state.edit_modal}
            onHideEditModal={this.handleHideEditModal}
            onSubmitEdit = {this.handleEditSubmit}
            onEditSubmit={this.handleEditSubmit}
            onChangeType={this.handleChangeType}
            petNameValue={this.state.pet_name}
            petTypeValue={this.state.pet_type}
          />
          <DeletePetModal
            showDeleteModalState={this.state.delete_modal} 
            onHideDeleteModal={this.handleHideDeleteModal}
            onSubmitDelete = {this.handleDelete}
            onDeleteSubmit = {this.handleDelete}
            petNameValue={this.state.pet_name}
            petTypeValue={this.state.pet_type}
            petLikesValue={this.state.likes}
            onLikes={this.handleLikes}
          />
        </main>
      </div>
    )
  }
}

