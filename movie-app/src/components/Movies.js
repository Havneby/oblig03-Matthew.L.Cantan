import { useState } from 'react';
import Title from '../components/Title';
import Movie from './Movie';
import {getMovies} from '../utils/movieService'

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const handleClick = async () => {
        const data = await getMovies();
        setMovies(data);
        console.log(data);
    }

    return (
        <>
            <Title title="Movies" />
            <section>
                {movies?.length > 0 ? movies.map((movie) => <Movie key={movie} {...movie}/>) : null}
            </section>

            <button type="button" onClick={handleClick}>
                Get content
            </button>
        </>
    );
}

export default Movies;