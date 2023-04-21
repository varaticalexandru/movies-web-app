package varatic.alexandru.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

// API layer
// restAPI controller

// uses service class

// gets a req from user & returns a response

@RequestMapping("/api/v1/reviews")
@RestController
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    // create a review
    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Review>(reviewService.createReview(payload.get("reviewBody"), payload.get("imdbId")), HttpStatus.CREATED);
    }
}
