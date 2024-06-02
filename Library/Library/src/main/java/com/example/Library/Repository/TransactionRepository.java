package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import com.example.Library.Domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    List<Transaction> findAll();

    // Method to retrieve a book by its ID
    Transaction findById(int id);

    // Method to save a book
    Transaction save(Transaction transaction);

    // Method to delete a book by its ID
    void deleteById(int id);

}
