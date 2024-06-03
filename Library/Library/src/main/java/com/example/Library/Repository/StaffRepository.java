package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import com.example.Library.Domain.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Integer> {
    List<Staff> findAll();

    // Method to retrieve a book by its ID
    Staff findById(int id);

    // Method to save a book
    Staff save(Staff staff);

    // Method to delete a book by its ID
    void deleteById(int id);
}