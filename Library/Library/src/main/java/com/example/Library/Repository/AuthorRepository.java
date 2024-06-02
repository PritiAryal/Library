//// AuthorRepository.java
//package com.example.Library.Repository;
//
//import com.example.Library.Domain.Author;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
////import org.springframework.data.repository.ListCrudRepository;
//
//
//@Repository
//public interface AuthorRepository extends JpaRepository<Author, Integer> {
//
//}

package com.example.Library.Repository;

import com.example.Library.Domain.Author;
import com.example.Library.Domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer> {
    List<Author> findAll();

    // Method to retrieve a book by its ID
    Author findById(int id);

    // Method to save a book
    Author save(Author author);

    // Method to delete a book by its ID
    void deleteById(int id);
    Optional<Author> findByName(String name);
}
