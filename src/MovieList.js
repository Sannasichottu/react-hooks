import {Movie} from "./Movie"

export function MovieList ({movies}){
    return (
        <section className="movie-list">
            {movies.map(({name,rating,summary,poster})=>( 
            <Movie name ={name} rating={rating} summary={summary} poster={poster} />
            ))}
        </section>
    );
}