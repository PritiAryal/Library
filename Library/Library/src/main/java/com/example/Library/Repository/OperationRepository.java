package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import com.example.Library.Domain.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OperationRepository extends JpaRepository<Operation, Integer> {
    List<Operation> findAll();

    // Method to retrieve a book by its ID
    Operation findById(int id);

    // Method to save a book
    Operation save(Operation operation);

    // Method to delete a book by its ID
    void deleteById(int id);
}