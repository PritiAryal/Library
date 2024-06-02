package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import com.example.Library.Domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    // Custom query methods if needed
    List<Category> findAll();

    // Method to retrieve a book by its ID
    Category findById(int id);

    // Method to save a book
    Category save(Category category);

    // Method to delete a book by its ID
    void deleteById(int id);
    Optional<Category> findByCategoryName(String categoryName);
}
