import React, {useState, useEffect} from "react";
import axios from "./axios"
import "./Row.css"
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            console.table(request.data.results)
            setMovies(request.data.results)
        };
        fetchData()
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            let trailerurl = await axios.get(
                `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
            );
            setTrailerUrl(trailerurl.data.results[0]?.key);
        }
    };

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => movie.backdrop_path !== null && (
                    <img
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                    alt={movie.name}
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row