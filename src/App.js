import React from 'react';
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

const App = () => {
    const {
        fetchNetflixOriginals,
        fetchTrending,
        fetchTopRated,
        fetchActionMovies,
        fetchComedyMovies,
        fetchHorrorMovies,
        fetchRomanceMovies,
        fetchDocumentaries
    } = requests
    return (
        <div className="app">
            <Navbar/>
            <Banner/>
            <Row title="NETFLIX ORIGINALS" fetchUrl={fetchNetflixOriginals} isLargeRow/>
            <Row title="Trending Now" fetchUrl={fetchTrending}/>
            <Row title="Top Rated" fetchUrl={fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={fetchHorrorMovies}/>
            <Row title="Romantic Movies" fetchUrl={fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={fetchDocumentaries}/>
        </div>
    )
}

export default App;
