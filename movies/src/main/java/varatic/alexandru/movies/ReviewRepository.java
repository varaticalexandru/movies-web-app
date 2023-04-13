package varatic.alexandru.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

// data access layer
// talks to DB, fetches the data

@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {


}
