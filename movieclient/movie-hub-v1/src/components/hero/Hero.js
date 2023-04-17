import React from "react";
import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

// renders the hero section of the home page
// displays a carousel of movies
// each movie has a poster, title, and a play button

const Hero = ({ movies }) => {

    
    // navigates to the trailer page
    const navigate = useNavigate();

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }



    // returns the JSX to render the component
    return (
        <div className="movie-carousel-container">
            <Carousel>
                {
                    movies?.map((movie) => {
                        return (
                            <Paper key={movie.imd}>
                                <div className="movie-card-container">
                                    <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                        <div className="movie-detail">

                                            <div className="movie-poster">
                                                <img src={movie.poster} alt="" />
                                            </div>

                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>

                                            <div className="movie-buttons-container">

                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                    <div className="play-button-icon-container">
                                                        <FontAwesomeIcon className="play-button-icon"
                                                            icon={faCirclePlay}
                                                        />
                                                    </div>
                                                </Link>

                                                <div className="movie-review-button-container">
                                                    <Button variant="info" onClick={() => reviews(movie.imdbId)}>
                                                        Reviews
                                                    </Button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero