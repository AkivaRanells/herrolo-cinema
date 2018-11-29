import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editMovie } from '../actions'
import {
  Button, Modal, ModalHeader, ModalBody,
  ModalFooter, Form, FormGroup, FormFeedback,
  Label, Input, Row, Col
} from 'reactstrap';

class EditMovieModal extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      modal: false,
      title: this.props.movie.Title,
      director: this.props.movie.Director,
      runtime: this.props.movie.Runtime,
      date: `01-01-${this.props.movie.Year}`,
      genre: this.props.movie.Genre,
      validate: {
        titleState: '',
        runtimeState: '',
        genreState: '',
        directorState: '',
        dateState: ''
      }
    };
    this.state = { ...this.initialState }
  }
  validateInputs(e, regexToValidate, validateItem) {
    const { validate } = this.state
    if (regexToValidate.test(e.target.value)) {
      validate[validateItem] = 'has-success'
    } else {
      validate[validateItem] = 'has-danger'
    }
    this.setState({ validate })
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
        Image: this.props.movie.Image,
        Runtime: runtime,
        Title: title,
        Year: date,
        id: this.props.movie.id,
        status: true
      }
      const { dispatch, movies } = this.props;
      const index = movies.findIndex(m => m.id === movie.id);
      dispatch(editMovie(movie, index));
      this.toggle()
    }
  }

  areAllInputsValidated = () => {
    const { validate } = this.state
    for (const prop in validate) {
      if (validate[prop] !== 'has-success' && validate[prop] !== '') {
        return false
      }
    }
    return true
  }

  resetProperties = () => {
    this.setState(this.initialState)
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const { title, director, runtime, genre, date } = this.state
    const dateRegex = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/
    return (
      <div>
        <Button outline color="danger" onClick={this.toggle}>Edit Movie</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Edit Movie</ModalHeader>
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
                        this.validateInputs(e, /[A-Za-z]/g, 'titleState')
                        this.handleChange(e)
                      }} />
                    <FormFeedback valid>
                      Your title is in the correct format.
                    </FormFeedback>
                    <FormFeedback invalid>
                      Your title contains no letters and is therefore invalid.
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
                    <Input type="text" name="date" id="movieDate" defaultValue={date}
                      valid={this.state.validate.movieState === 'has-success'}
                      invalid={this.state.validate.movieState === 'has-danger'}
                      onChange={(e) => {
                        this.validateInputs(e, dateRegex, 'movieState')
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

export default connect(mapStateToProps)(EditMovieModal)