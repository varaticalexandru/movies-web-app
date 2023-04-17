package varatic.alexandru.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


// uses repo class
// talks to DB through the repo class

// returns data to the API layer


@Service
public class MovieService {

    // db access methods

    @Autowired
    private MovieRepository repository; // reference to repo

    public List<Movie> findAllMovies() {
        return repository.findAll();
    }

    public Optional<Movie> findMovieByImdbId(String imdbId) {
        return repository.findMovieByImdbId(imdbId);
    }

}
