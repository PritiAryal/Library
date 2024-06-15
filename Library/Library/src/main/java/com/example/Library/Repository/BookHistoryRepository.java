package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import com.example.Library.Domain.BookHistory;
import com.example.Library.Domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookHistoryRepository extends JpaRepository<BookHistory, Integer>{
// Define a method to find BookHistory by bookId
//    BookHistory findByBookID(Integer bookId);
//    // Find BookHistory by originalBook's bookID
//    BookHistory findByOriginalBook(Book originalBook);
//    @Query("SELECT bh FROM BookHistory bh WHERE bh.originalBook.bookID = :bookId")
//    BookHistory findByOriginalBookID(@Param("bookId") Integer bookId);

    // Corrected method to find BookHistory by originalBook's bookID
    //@Query("SELECT bh FROM BookHistory bh WHERE bh.originalBook.bookID = :bookId")
    //BookHistory findByOriginalBookID(@Param("bookId") Integer bookId);
}
