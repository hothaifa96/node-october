import React, {Component } from 'react';
import { getMovies } from '../Service/MoviesService';
class Movies extends Component {
    state = { 
        movies: getMovies()
     } 
    render() { 
        return (
            <table className="table">
                <thead>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Genre</th>
                    <th>Length</th>
                </thead>
                <tbody>
                {this.state.movies.map(movie=>(
                <tr>
                    <td>{movie.name}</td>
                    <td> {movie.id}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.length}</td>
                </tr>
                ))}
                </tbody>
            </table>
        );
    }
}
 
export default Movies;
