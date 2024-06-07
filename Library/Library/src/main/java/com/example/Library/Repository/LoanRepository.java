package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import com.example.Library.Domain.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Integer> {
    List<Loan> findAll();

    // Method to retrieve a book by its ID
    Loan findById(int id);

    // Method to save a book
    Loan save(Loan loan);

    // Method to delete a book by its ID
    void deleteById(int id);
    List<Loan> findByMemberMemberID(Integer memberID);
    List<Loan> findByBookBookID(Integer bookID);
}
