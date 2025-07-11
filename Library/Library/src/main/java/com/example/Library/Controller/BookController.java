////package com.example.Library.Controller;
////
////import com.example.Library.Domain.Book;
////import com.example.Library.Repository.BookRepository;
////import com.example.Library.Service.BookService;
////import lombok.RequiredArgsConstructor;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.http.HttpStatus;
////import org.springframework.http.ResponseEntity;
////import org.springframework.stereotype.Controller;
////import org.springframework.web.bind.annotation.*;
////
////import java.util.List;
////
//////@RestController
////@RequiredArgsConstructor
////@CrossOrigin
////@Controller
////@RequestMapping("/api/books")
////public class BookController {
////
////    @Autowired
////    private BookService bookService;
////
////    @Autowired
////    private BookRepository bookRepository;
////
////    @GetMapping
////    public ResponseEntity<List<Book>> getAllBooks() {
////        List<Book> books = bookService.getAllBooks();
////        return new ResponseEntity<>(books, HttpStatus.OK);
////    }
////
////    @GetMapping("/{id}")
////    public ResponseEntity<Book> getBookById(@PathVariable int id) {
////        Book book = bookService.getBookById(id);
////        return new ResponseEntity<>(book, HttpStatus.OK);
////    }
////
////    @PostMapping
////    public ResponseEntity<Book> saveBook(@RequestBody Book book) {
////        Book savedBook = bookService.saveBook(book);
////        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
////    }
////
////    @DeleteMapping("/{id}")
////    public ResponseEntity<Void> deleteBook(@PathVariable int id) {
////        bookService.deleteBook(id);
////        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
////    }
////
////    // Other methods as needed
////}
//
//package com.example.Library.Controller;
//
//import com.example.Library.Domain.Book;
//import com.example.Library.Exception.ResourceNotFoundException;
//import com.example.Library.Service.BookService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RequiredArgsConstructor
//@CrossOrigin
//@Controller
//@RequestMapping("/api/book")
//public class BookController {
//
//    @Autowired
//    private BookService bookService;
//
//    @GetMapping
//    public ResponseEntity<List<Book>> getAllBooks() {
//        List<Book> books = bookService.getAllBooks();
//        return new ResponseEntity<>(books, HttpStatus.OK);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Book> getBookById(@PathVariable int id) {
//        Book book = bookService.getBookById(id);
//        return new ResponseEntity<>(book, HttpStatus.OK);
//    }
//
////    @PostMapping
////    public ResponseEntity<Book> saveBook(@RequestBody Book book) {
////        Book savedBook = bookService.saveBook(book);
////        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
////    }
//
//    @PostMapping
//    public ResponseEntity<Book> saveBook(@RequestBody Book book, @RequestParam Integer categoryID, @RequestParam Integer authorID) {
//        Book savedBook = bookService.saveBook(book, categoryID, authorID);
//        return ResponseEntity.ok(savedBook);
//    }
//
//
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteBook(@PathVariable int id) {
//        bookService.deleteBook(id);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
////        return ResponseEntity.noContent().build();
//    }
//
////    @PutMapping("/{id}")
////    public ResponseEntity<Book> updateBook(@PathVariable Integer id, @RequestBody Book bookDetails) {
////        try {
////            Book updatedBook = bookService.updateBookWithAssociations(id, bookDetails);
////            return ResponseEntity.ok(updatedBook);
////        } catch (ResourceNotFoundException e) {
////            return ResponseEntity.notFound().build();
////        }
////    }
//
//
//
//    @PutMapping("/{id}")
//    public ResponseEntity<Book> updateBook(@PathVariable Integer id, @RequestBody Book updatedBook) {
//        try {
//            Book book = bookService.updateBook(id, updatedBook);
//            return ResponseEntity.ok(book);
//        } catch (IllegalArgumentException e) {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
////    @PutMapping("/{id}")
////    public ResponseEntity<Book> updateBook(@PathVariable Integer id, @RequestBody Book bookDetails) {
////        Optional<Book> book = bookService.findById(id);
////        if (book.isPresent()) {
////            bookDetails.setBookID(id);
////            return ResponseEntity.ok(bookService.saveBook(bookDetails));
////        } else {
////            return ResponseEntity.notFound().build();
////        }
////    }
//
//    // Other methods as needed
//}

package com.example.Library.Controller;

import com.example.Library.Domain.Book;
import com.example.Library.Service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;

@RequiredArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/api/book")
public class BookController {

    private final BookService bookService;

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/deletedAsWell")
    public ResponseEntity<List<Book>> getAllBooksWithSoftDelete() {
        List<Book> books = bookService.getAllBooksWithSoftDeleted();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Book>> searchBooks(@RequestParam(required = false) String title,
                                                  @RequestParam(required = false) String publisher,
                                                  @RequestParam(required = false) String authorName,
                                                  @RequestParam(required = false) String categoryName,
                                                  @RequestParam(required = false) Integer yearPublished,
                                                  @RequestParam(required = false) BigInteger isbn) {
        List<Book> books = bookService.searchBooks(title, publisher, authorName, categoryName, yearPublished, isbn);
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/deletedAsWell/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable int id) {
        Book book = bookService.getBookById(id);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookByIdWithSoftDelete(@PathVariable int id) {
        Book book = bookService.getBookByIdWithSoftDelete(id);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Book> saveBook(@RequestBody Book book,
                                         @RequestParam Integer categoryID,
                                         @RequestParam Integer authorID,
                                         @RequestParam Integer staffID) {
        Book savedBook = bookService.saveBook(book, categoryID, authorID, staffID, "Create");
        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Integer id,
                                           @RequestBody Book book,
                                           @RequestParam Integer authorID,
                                           @RequestParam Integer categoryID,
                                           @RequestParam Integer staffID) {
        Book updatedBook = bookService.updateBook(id, book, authorID, categoryID, staffID, "Update");
        return new ResponseEntity<>(updatedBook, HttpStatus.OK);
    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteBook(@PathVariable Integer id,
//                                           @RequestParam Integer staffID) {
//        bookService.deleteBook(id, staffID, "Delete");
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> softDeleteBook(@PathVariable Integer id,
                                               @RequestParam Integer staffID) {
        bookService.softDeleteBook(id, staffID, "Delete");
        return ResponseEntity.noContent().build();
    }
}

