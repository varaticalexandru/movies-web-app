package varatic.alexandru.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


// uses repo class
// talks to DB, gets list of movies, returns it to the API layer


@Service
public class MovieService {

    // db access methods

    @Autowired
    private MovieRepository movieRepository; // reference to repo
    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }

    public Optional<Movie> singleMovie(ObjectId id) {
        return movieRepository.findById(id);
    }

}
