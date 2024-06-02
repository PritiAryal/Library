package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
    // Custom query methods if needed
    // Method to retrieve all books
    List<Book> findAll();

    // Method to retrieve a book by its ID
    Book findById(int id);

    // Method to save a book
    Book save(Book book);

    // Method to delete a book by its ID
    void deleteById(int id);
}