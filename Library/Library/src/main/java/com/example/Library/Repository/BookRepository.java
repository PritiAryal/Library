package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
    // Custom query methods if needed
    // Method to retrieve all books
//    List<Book> findAll();
//
//    // Method to retrieve a book by its ID
//  Book findById(int id);
//
//    // Method to save a book
//    Book save(Book book);
//
//    // Method to delete a book by its ID
//    void deleteById(int id);
    List<Book> findByTitleContaining(String title);
    List<Book> findByPublisherContaining(String publisher);
    List<Book> findByAuthorNameContaining(String authorName); // Requires a custom query
    List<Book> findByCategoryCategoryNameContaining(String categoryName); // Requires a custom query
    List<Book> findByYearPublished(Integer yearPublished);
    List<Book> findByISBN(Long isbn);

    @Query("SELECT b FROM Book b JOIN b.author a WHERE a.name LIKE %:authorName%")
    List<Book> findByAuthorName(@Param("authorName") String authorName);

    @Query("SELECT b FROM Book b JOIN b.category c WHERE c.categoryName LIKE %:categoryName%")
    List<Book> findByCategoryName(@Param("categoryName") String categoryName);
}