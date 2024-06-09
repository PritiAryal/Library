package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import com.example.Library.Domain.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Integer> {
//    List<Loan> findAll();
//
//    // Method to retrieve a book by its ID
//    Loan findById(int id);
//
//    // Method to save a book
//    Loan save(Loan loan);
//
//    // Method to delete a book by its ID
//    void deleteById(int id);
//    List<Loan> findByMemberMemberID(Integer memberID);
//    List<Loan> findByBookBookID(Integer bookID);
//@Query("SELECT l FROM Loan l JOIN FETCH l.book JOIN FETCH l.member")
//List<Loan> findAllWithBookAndMember();

    @Query("SELECT l, l.book.title, l.member.name FROM Loan l LEFT JOIN FETCH l.book LEFT JOIN FETCH l.member WHERE l.member.memberID = :memberID AND l.book.bookID = :bookID")
    List<Object[]> findAllWithBookTitleAndMemberNameByMemberIDAndBookID(@Param("memberID") Integer memberID, @Param("bookID") Integer bookID);


}
