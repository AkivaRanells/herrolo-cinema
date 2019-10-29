import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap'
import EditMovieModal from './EditModal'
import DeleteMovieModal from './DeleteModal'
class MovieCard extends Component {
    displayTitle=(movieTitle)=>{
        let title = movieTitle.toLowerCase()
        let firstLetter = /(^|[^a-z])[a-z]/g
        let capitalizeFirstLetter = title.replace(firstLetter, this.upperCase)
        let replaceUnwantedCharacters =  capitalizeFirstLetter.replace(/([^\sa-zA-Z])/g, '')
        return replaceUnwantedCharacters
    }
    upperCase=(str)=>{
        return str.toUpperCase()
    }

    render() {
        const image = 'https://i.imgur.com/coUQtBy.jpg'
        const movie = this.props.movies.find(m => m.id === this.props.id);
        return (
            <Card>
                <CardImg top width="100%" src={movie.Image|| image} alt="Card image cap" />
                <CardBody>
                    <CardTitle><span>Title:</span> {this.displayTitle(movie.Title)}</CardTitle>
                    <CardSubtitle><span>Released:</span> {movie.Year}</CardSubtitle>
                    <CardText> <span> Genre:</span> {movie.Genre}<br/>  <span> Runtime:</span> {movie.Runtime}<br/> <span> Director:</span> {movie.Director}</CardText>
                    <EditMovieModal movie={movie} key={movie.id} />
                    <DeleteMovieModal id={movie.id}/>
                </CardBody>
            </Card>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

// const mapDispatchToProps = { fetchMovieList }

export default connect(mapStateToProps)(MovieCard)

