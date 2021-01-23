package com.reposervice.ws;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PhotoRepository  extends MongoRepository<Photo, String> {

}
