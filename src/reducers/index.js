import { combineReducers, bindActionCreators } from 'redux'
import { RECEIVE_MOVIE, REQUEST_MOVIE, EDIT_MOVIE, DELETE_MOVIE, ADD_MOVIE } from '../constants/ActionTypes'
let idCounter = 0;
const initialState = {
    movies: ['a', 'b', 'c']
}
// , 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'

const movies = (state = initialState.movies, action = initialState.action) => {
    switch (action.type) {
        case RECEIVE_MOVIE:
        let { Title, Year, Runtime, Genre, Director, Poster } = action.movie;
            let updateArray = { Title: Title, Year: Year, Runtime: Runtime, Genre: Genre, Director: Director, id: idCounter++, Image: Poster, status: true };
            return [
                ...state.slice(0, action.index), updateArray, ...state.slice(action.index + 1)
            ]
        case REQUEST_MOVIE:
            let update = { Title: action.movieTitle, index: action.index, status: false }
            return [
                ...state.slice(0, action.index), update, ...state.slice(action.index + 1)
            ]
        case EDIT_MOVIE:
            return [
                ...state.slice(0, action.index), action.movie, ...state.slice(action.index + 1)
            ]
        case DELETE_MOVIE:
            return [
                ...state.slice(0, action.index), ...state.slice(action.index + 1)
            ]
        case ADD_MOVIE:
        let {movie} = action
        let addToArray = { Title: movie.Title, Year: movie.Year, Runtime: movie.Runtime, Genre: movie.Genre, Director: movie.Director, id: idCounter++, Image: movie.Poster, status: true };
            return [
                ...state, addToArray 
            ]
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    movies
})
export default rootReducer