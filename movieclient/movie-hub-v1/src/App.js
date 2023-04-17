import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

 

// App component
// sets up the API call to fetch movies
// passes the retrieved data as a prop to the Home component

function App() {

  const [movies, setMovies] = useState(); // state variable to store [all] the movies, function to update it
  const [movie, setMovie] = useState(); // state variable to store a single movie, function to update it
  const [reviews, setReviews] = useState([]); // state variable to store the reviews for a movie, function to update it


  // function to fetch the movies from the API endpoint
  // and update the state variable
  const getMovies = async () => {

    try {

      const response = await api.get("/api/v1/movies");

      console.log(response.data);

      setMovies(response.data);

    } catch (err) {
      console.log(err);
    }

  }

  const getMovieData = async (movieId) => {

    try {

      const response = await api.get(`/api/v1/movies/${movieId}`); // make a GET request to the API endpoint to get a single movie
      const singleMovie = response.data; // extract the data from the response
      
      setMovie(singleMovie); // update the state variable (movie)

      setReviews(singleMovie.reviews); // update the state variable (reviews)

    } catch (err) {
      console.log(err);
    }
  }

  // function to fetch the movies when the component is mounted
  useEffect(() => {
    getMovies();
  }, [])


  // returns the JSX to render the component
  return (
    <div className="App">

      {/* Header component */}
      <Header />
      
      {/* route mappings for the App */}
      <Routes>

        {/* route for the Layout */}
        <Route path="/" element={<Layout/>}>

          {/* route for the Home component */}
          <Route path="/" element={<Home movies={movies} />} ></Route>

          {/* route for the Trailer component */}
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} ></Route>

          {/* route for the Reviews component */}
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} 
            movie={movie} 
            reviews={reviews} 
            setReviews={setReviews} />} >

          </Route>

          {/* route for the NotFound component */}
          <Route path="*" element={<NotFound />} ></Route>

        </Route>

      </Routes>

    </div>
  );
}

export default App;
