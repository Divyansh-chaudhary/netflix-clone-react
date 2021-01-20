import React, {useEffect , useState} from 'react';
import '../css/banner.css';
import axios from '../axios.inc';
import requests from '../api';

const Banner = () => {
	
	const imgBaseURL = "https://image.tmdb.org/t/p/original/";
	const [movie, setMovie] = useState([]);
	
	useEffect(() => {
		const getData = async () => {
			const data = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				data.data.results[
				 Math.floor(Math.random()*data.data.results.length-1)
				]
			);
			return data;
		}
		getData();
	},[]);
	
	return (
		<header className="banner" 
		    style={{
				backgroundImage: `url("${imgBaseURL}${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
				backgroundSize: "cover",
			}} >
			<div className="content">
				<h1>{movie?.name || movie?.title || movie?.original_name}</h1>
				<div>
					<button>Play</button>
					<button>my List</button>
				</div>
				<p>{movie?.overview}</p>
			</div>
			<div className="banner-bottom"></div>
		</header>
	)
};

export default Banner;