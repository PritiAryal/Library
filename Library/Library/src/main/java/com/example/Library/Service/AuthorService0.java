//package com.example.Library.Service;
//
//import com.example.Library.Domain.Author;
//
//import java.util.List;
//import java.util.Optional;
//
//public interface AuthorService {
//    List<Author> getAllAuthors();
//    Author getAuthorById(Integer id);
//    Author saveAuthor(Author author);
//    void deleteAuthor(Integer id);
//    // Other methods as needed
//
//    //Optional<Object> findById(int id);
//
//    //Author save(Author author);
//
//    //void deleteById(int id);
//    // Custom query methods if needed
//}

package com.example.Library.Service;

import com.example.Library.Domain.Author;
import java.util.List;

public interface AuthorService0 {
    List<Author> getAllAuthors();
    Author getAuthorById(Integer id);
    Author saveAuthor(Author author);
    void deleteAuthor(Integer id);
//    Author createAuthor(String name, String biography); // New method declaration
}

