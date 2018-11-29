import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteMovie } from '../actions'
import {
    Button, Modal, ModalHeader, ModalBody,
    ModalFooter
} from 'reactstrap';

class DeleteMovieModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    deleteThisMovie =()=>{
        const { dispatch, movies } = this.props;
        const index = movies.findIndex(m => m.id === this.props.id);
        dispatch(deleteMovie(index));
        this.toggle()
    }

    toggle=()=> {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button outline color="danger" onClick={this.toggle}>Delete Movie</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle} className = 'delete-modal'>Delete Movie</ModalHeader>
                    <ModalBody className = 'delete-modal'>
                        Are you sure you would like to delete this movie? This action cannot be undone unless you are good friends with the site admin!
              </ModalBody>
                    <ModalFooter>
                        <Button outline color="danger" onClick={this.toggle}>Cancel This Action</Button>{' '}
                        <Button outline color="danger" onClick={this.deleteThisMovie}>Proceed Anyway And Delete Movie</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(DeleteMovieModal)