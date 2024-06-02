//
//////#  jdbc:mysql://localhost:3306/your_database_name
//
//package com.example.Library.Controller;
//
//import com.example.Library.Domain.Author;
//import com.example.Library.Service.AuthorService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.*;
//
//import javax.sql.DataSource;
//import java.sql.*;
//import java.util.ArrayList;
//import java.util.List;
//
////@RestController
//@RequiredArgsConstructor
//@CrossOrigin
//@Controller
//@RequestMapping("/api/authors")
//public class AuthorController {
//
//    //@Autowired
//    private final AuthorService authorService;
//
//    @GetMapping
//    public ResponseEntity<List<Author>> getAllAuthors() {
//        List<Author> authors = authorService.getAllAuthors();
//        return new ResponseEntity<>(authors, HttpStatus.OK);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Author> getAuthorById(@PathVariable Integer id) {
//        Author author = authorService.getAuthorById(id);
//        return new ResponseEntity<>(author, HttpStatus.OK);
//    }
//
//    @PostMapping
//    public ResponseEntity<Author> saveAuthor(@RequestBody Author author) {
//        Author savedAuthor = authorService.saveAuthor(author);
//        return new ResponseEntity<>(savedAuthor, HttpStatus.CREATED);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteAuthor(@PathVariable Integer id) {
//        authorService.deleteAuthor(id);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//
//    // Other methods as needed
//}
//
//


package com.example.Library.Controller;

import com.example.Library.Domain.Author;
import com.example.Library.Domain.Member;
import com.example.Library.Repository.AuthorRepository;
import com.example.Library.Service.AuthorService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//@RestController
@Controller
@RequestMapping("/api/authors")
@RequiredArgsConstructor
@CrossOrigin
public class AuthorController {

    //@Autowired
    private final AuthorService authorService;

    //@Autowired
    //private final AuthorRepository authorRepository;


    @GetMapping
    public ResponseEntity<List<Author>> getAllAuthors() {
        List<Author> authors = authorService.getAllAuthors();
        return new ResponseEntity<>(authors, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable Integer id) {
        Author author = authorService.getAuthorById(id);
        return new ResponseEntity<>(author, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Author> saveAuthor(@RequestBody Author author) {
        Author savedAuthor = authorService.saveAuthor(author);
        return new ResponseEntity<>(savedAuthor, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Author> updateAuthor(@PathVariable Integer id, @RequestBody Author authorDetails) {
        Optional<Author> author = authorService.findById(id);
        if (author.isPresent()) {
            authorDetails.setAuthorID(id);
            return ResponseEntity.ok(authorService.saveAuthor(authorDetails));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAuthor(@PathVariable Integer id) {
        authorService.deleteAuthor(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

//    // New endpoint to create a new author
//    @PostMapping("/create")
//    public ResponseEntity<Author> createAuthor(@RequestParam String name, @RequestParam String biography) {
//        Author createdAuthor = authorService.createAuthor(name, biography);
//        return new ResponseEntity<>(createdAuthor, HttpStatus.CREATED);
//    }
}

