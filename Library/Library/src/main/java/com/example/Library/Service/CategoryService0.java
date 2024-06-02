package com.example.Library.Service;

import com.example.Library.Domain.Category;

import java.util.List;

public interface CategoryService0 {
    List<Category> getAllCategories();
    Category getCategoryById(int id);
    Category saveCategory(Category category);
    void deleteCategory(int id);
    // Other methods as needed
}