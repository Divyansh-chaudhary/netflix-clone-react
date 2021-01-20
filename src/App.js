import React from 'react';
import './css/app.css';
import Row from './components/Row';
import requests from './api';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

export default function App() {
	
	return(
		<div className="app">
			<Navbar />
			<Banner />
			<section className="rows">
				<Row title={"NETFLIX ORIGINALS"} fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
				<Row title={"Trending"} fetchURL={requests.fetchTrending}/>
				<Row title={"Top Rated"} fetchURL={requests.fetchTopRated}/>
				<Row title={"Action Movies"} fetchURL={requests.fetchActionMovies}/>
				<Row title={"Comedy Movies"} fetchURL={requests.fetchComedyMovies}/>
				<Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies}/>
				<Row title={"Ramantic"} fetchURL={requests.fetchRomanceMovies}/>
				<Row title={"Documentaries"} fetchURL={requests.fetchDocumentaries}/>
			</section>
		</div>
	)
}