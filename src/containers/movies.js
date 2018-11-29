import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovieList } from '../actions'
import MovieCard from '../components/MovieCard'
import { Container, CardDeck } from 'reactstrap'
class Movies extends Component {

    componentDidMount = () => {
        const { dispatch, movies } = this.props;
        dispatch(fetchMovieList(movies));
    }
    render() {
        return (
            <Container>
                <CardDeck>
                    {this.props.movies.filter(movie=> movie.status).map((movie) =>
                        <MovieCard key={movie.id} id={movie.id}/>)}
                </CardDeck>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

// const mapDispatchToProps = { fetchMovieList }

export default connect(mapStateToProps)(Movies)