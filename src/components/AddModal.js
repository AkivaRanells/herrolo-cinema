import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMovie } from '../actions'
import {
    Button, Modal, ModalHeader, ModalBody,
    ModalFooter, Form, FormGroup, FormFeedback,
    Label, Input, Row, Col
} from 'reactstrap';

class AddMovieModal extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            modal: false,
            title: '',
            director: '',
            runtime: '',
            date: '',
            genre: '',
            validate: {
                titleState: '',
                runtimeState: '',
                genreState: '',
                directorState: '',
                dateState: ''
            }
        };
        this.state = JSON.parse(JSON.stringify(this.initialState))
    }
    validateInputs=(e, regexToValidate, validateItem)=> {
        const { validate } = this.state
        if (regexToValidate.test(e.target.value)) {
            validate[validateItem] = 'has-success'
        } else {
            validate[validateItem] = 'has-danger'
        }
        this.setState({ validate })
    }

    validateTitle=(e, regexToValidate, validateItem)=>{
        if(this.noDuplicateTitle(e.target.value)){
            this.validateInputs(e, regexToValidate, validateItem)
        }else{
            const { validate } = this.state
            validate[validateItem] = 'has-danger'
            this.setState({ validate })
        }
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        if (this.areAllInputsValidated()) {
            const { title, director, runtime, genre, date } = this.state;
            let movie = {
                Director: director,
                Genre: genre,
                Poster: 'https://i.imgur.com/coUQtBy.jpg',
                Runtime: runtime,
                Title: title,
                Year: date,
                status: false
            }
            const { dispatch, movies } = this.props;
            const index = movies.length
            dispatch(addMovie(movie, index));
            this.resetProperties()
            this.toggle()
        }
    }

    noDuplicateTitle=(value)=>{
        const index = this.props.movies.findIndex(m => m.Title === value);
        if(index===-1)return true
        return false
    }

    areAllInputsValidated = () => {
        const { validate } = this.state
        for (const prop in validate) {
            if (validate[prop] !== 'has-success') {
                return false
            }
        }
        return true
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    resetProperties = async () => {
        await this.setState(JSON.parse(JSON.stringify(this.initialState)))
    }
    render() {
        const { title, director, runtime, genre, date } = this.state
        const dateRegex = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/
        return (
            <div>
                <Button outline color="danger" size="lg" block onClick={this.toggle}>Add Movie</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Add Movie</ModalHeader>
                    <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                        <ModalBody>

                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="movieTitle">Title</Label>
                                        <Input type="text" name="title" id="movieTitle" value={title}
                                            valid={this.state.validate.titleState === 'has-success'}
                                            invalid={this.state.validate.titleState === 'has-danger'}
                                            onChange={(e) => {
                                                this.validateTitle(e, /[A-Za-z]/g, 'titleState')
                                                this.handleChange(e)
                                            }} />
                                        <FormFeedback valid>
                                            Your title is in the correct format.
                                        </FormFeedback>
                                        <FormFeedback invalid>
                                            A valid title must: (1) Not be the exact same letters as an already existing title. (2) Only letters or numbers.
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="movieRuntime">Runtime</Label>
                                        <Input type="text" name="runtime" id="movieRuntime" value={runtime}
                                            valid={this.state.validate.runtimeState === 'has-success'}
                                            invalid={this.state.validate.runtimeState === 'has-danger'}
                                            onChange={(e) => {
                                                this.validateInputs(e, /^\d{1,3}\smin$/, 'runtimeState')
                                                this.handleChange(e)
                                            }} />
                                        <FormFeedback valid>
                                            Your runtime is in the correct format.
                                        </FormFeedback>
                                        <FormFeedback invalid>
                                            Your runtime must be a number followed by a space and the letters 'min'.
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="movieDirector">Director</Label>
                                        <Input type="text" name="director" id="movieDirector" value={director}
                                            valid={this.state.validate.directorState === 'has-success'}
                                            invalid={this.state.validate.directorState === 'has-danger'}
                                            onChange={(e) => {
                                                this.validateInputs(e, /[A-Za-z]/g, 'directorState')
                                                this.handleChange(e)
                                            }} />
                                        <FormFeedback valid>
                                            Your director is in the correct format.
                                        </FormFeedback>
                                        <FormFeedback invalid>
                                            Your director contains no letters and is therefore invalid.
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="movieGenre">Genre</Label>
                                        <Input type="text" name="genre" id="movieGenre" value={genre}
                                            valid={this.state.validate.genreState === 'has-success'}
                                            invalid={this.state.validate.genreState === 'has-danger'}
                                            onChange={(e) => {
                                                this.validateInputs(e, /[A-Za-z]/g, 'genreState')
                                                this.handleChange(e)
                                            }} />
                                        <FormFeedback valid>
                                            Your genre is in the correct format.
                                        </FormFeedback>
                                        <FormFeedback invalid>
                                            Your genre contains no letters and is therefore invalid.
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="movieDate">Released</Label>
                                        <Input type="text" name="date" id="movieDate" value={date}
                                            valid={this.state.validate.dateState === 'has-success'}
                                            invalid={this.state.validate.dateState === 'has-danger'}
                                            onChange={(e) => {
                                                this.validateInputs(e, dateRegex, 'dateState')
                                                this.handleChange(e)
                                            }} />
                                        <FormFeedback valid>
                                            Your date is in the correct format.
                                        </FormFeedback>
                                        <FormFeedback invalid>
                                            Your date needs to be a valid date between 01-01-1900 and 12-12-2099 formatted like dd-mm-yyyy.
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="danger" type='submitForm' onClick={this.submitForm}>Save Changes</Button>{' '}
                            <Button outline color="danger" onClick={this.resetProperties}>Cancel</Button>
                        </ModalFooter>
                    </Form>
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

export default connect(mapStateToProps)(AddMovieModal)