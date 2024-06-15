package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

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

    @Query("SELECT b FROM Book b WHERE b.deleted is NULL OR b.deleted = false")
    List<Book> findByDeletedFalse();

    @Query("SELECT b FROM Book b WHERE b.bookID = :bookId AND (b.deleted = false OR b.deleted IS NULL)")
    Optional<Book> findByIdAndDeletedFalse(@Param("bookId") Integer bookId);
    List<Book> findByTitleContaining(String title);
    List<Book> findByPublisherContaining(String publisher);
    List<Book> findByAuthorNameContaining(String authorName); // Requires a custom query
    List<Book> findByCategoryCategoryNameContaining(String categoryName); // Requires a custom query
    List<Book> findByYearPublished(Integer yearPublished);
    List<Book> findByISBN(BigInteger isbn);

    @Modifying
    @Query("UPDATE Book b SET b.deleted = true WHERE b.bookID = :bookId")
    void softDeleteById(@Param("bookId") Integer bookId);

    @Query("SELECT b FROM Book b JOIN b.author a WHERE a.name LIKE %:authorName%")
    List<Book> findByAuthorName(@Param("authorName") String authorName);

    @Query("SELECT b FROM Book b JOIN b.category c WHERE c.categoryName LIKE %:categoryName%")
    List<Book> findByCategoryName(@Param("categoryName") String categoryName);
}