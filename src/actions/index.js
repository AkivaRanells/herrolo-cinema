import { 
    RECEIVE_MOVIE,  
    REQUEST_MOVIE, EDIT_MOVIE, DELETE_MOVIE, ADD_MOVIE } from '../constants/ActionTypes'
import { API_KEY } from '../apikey'

export const requestMovie = (movieTitle, index) =>({
    type: REQUEST_MOVIE,
    movieTitle,
    index: index
})

export const receiveMovie = (movieTitle, index, json)=>({
    type: RECEIVE_MOVIE,
    movieTitle,
    movie: json,
    index: index
})

export const fetchMovie = (movieTitle, index) => dispatch =>{
    dispatch(requestMovie(movieTitle, index))
   return fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${API_KEY}`)
   .then(response => response.json())
   .then(json => dispatch(receiveMovie(movieTitle, index, json)))
}

export const fetchMovieList = titleArray => dispatch => {
    titleArray.forEach((movieTitle, index) => {
        dispatch(fetchMovie(movieTitle, index))
    });
}

export const editMovie=(movie, index)=>({
    type: EDIT_MOVIE,
    index: index,
    movie: movie
})

export const deleteMovie = (index)=>({
    type: DELETE_MOVIE,
    index: index
})

export const addMovie = (movie, index)=>({
    type: ADD_MOVIE,
    movie: movie,
    index: index
})