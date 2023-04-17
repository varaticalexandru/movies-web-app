import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

import React from 'react'

// renders the reviews for a movie
// allows the user to add a review for a movie

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

    const revText = useRef();   // reference the text area control within the form
    let params = useParams();   // get the parameters from the URL
    const movieId = params.movieId; // get the movieId parameter from the URL

    // fetch the appropriate movie data
    useEffect(() => {
        getMovieData(movieId);
    }, [])

    // function to add a review to the movie
    const addReview = async (e) => {
        
        e.preventDefault();

        const rev = revText.current;

        try {

            // make a POST request to the API endpoint to add a review
            const response = await api.post(`/api/v1/reviews`, {
                reviewBody: rev.value,
                imdbId: movieId
            });

            // update the reviews state variable optimistically (from the client data)
            const updatedReviews = [...reviews, { body: rev.value }];

            // clear the text area control
            rev.value = "";

            // update the reviews state variable
            setReviews(updatedReviews);

        } catch (err) {
            console.log(err);
        }
    }

    // returns the JSX to render the component
    return (
        
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>

            <Row>
                <Col className="mt-2">
                    <img src={movie?.poster} alt="" />
                </Col>

                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review ?" />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map( (review) => {
                            return(
                                <>
                                    <Row>
                                        <Col>{review.body}</Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }


                </Col>
            </Row>

            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>

        </Container>
    
    )
}

export default Reviews