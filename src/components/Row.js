import React, {useEffect , useState} from 'react';
import axios from '../axios.inc';
import '../css/row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Row = ({ fetchURL, title, isLargeRow }) => {
	
	const imgBaseURl = "https://image.tmdb.org/t/p/original/";
	const [movies, setMovies] = useState([]);
	const [trailer, setTrailer] = useState();
	
	useEffect(() => {
		const fetchData = async () => {
			const movie_arr = await axios.get(`${fetchURL}`);
			setMovies(movie_arr.data.results);
		}
		fetchData();
	}, [fetchURL]);
	
	const playTrailer = (movie) => {
		if(trailer) { 
			setTrailer('');
		} else {
			movieTrailer( movie?.original_name || movie?.name || "")
			.then(url => {
				const urlParams = new URLSearchParams(new URL(url).search);
				setTrailer(urlParams.get("v"));
			})
			.catch(err => alert("Trailer Not Found"));
		}
	}
	
	const opts = {
		height: "350",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	console.log(movies);
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="poster_row">
			{movies.map(movie => 
				<img
				  onClick={()=>playTrailer(movie)}
				  key={movie.id}
				  className={`movie_img ${isLargeRow ? "big_img" : ""}`}
				  src={`${imgBaseURl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
				  alt={`${movie.name}`}
				/>
			)}
			</div>
			{trailer && <YouTube videoId={trailer} opts={opts} />}
		</div>
	)
};

export default Row;