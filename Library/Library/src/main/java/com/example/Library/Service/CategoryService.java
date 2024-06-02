package com.example.Library.Service;

import com.example.Library.Domain.Category;
import com.example.Library.Domain.Member;
import com.example.Library.Repository.CategoryRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CategoryService {//implements CategoryService0 {

   // @Autowired
    private final CategoryRepository categoryRepository;

    //@Override
    @Transactional
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    //@Override
    @Transactional
    public Category getCategoryById(int id) {
        return categoryRepository.findById(id);
    }

    @Transactional
    public Optional<Category> findById(Integer id) {
        return categoryRepository.findById(id);
    }

    //@Override
    @Transactional
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    //@Override
    @Transactional
    public void deleteCategory(int id) {
        categoryRepository.deleteById(id);
    }

    // Other method implementations
}

//package com.example.Library.Service;
//
//import com.example.Library.Domain.Category;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import javax.sql.DataSource;
//import java.sql.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class CategoryServiceImpl implements CategoryService0 {
//
//    @Autowired
//    private DataSource dataSource;
//
//    @Override
//    public List<Category> getAllCategories() {
//        List<Category> categories = new ArrayList<>();
//        try (Connection connection = dataSource.getConnection();
//             Statement statement = connection.createStatement();
//             ResultSet resultSet = statement.executeQuery("SELECT * FROM categories")) {
//            while (resultSet.next()) {
//                Category category = new Category();
//                category.setCategoryID(resultSet.getInt("categoryID"));
//                category.setCategoryName(resultSet.getString("categoryName"));
//                // Set other properties of category from result set
//                categories.add(category);
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        return categories;
//    }
//
//    @Override
//    public Category getCategoryById(int id) {
//        Category category = null;
//        try (Connection connection = dataSource.getConnection();
//             PreparedStatement statement = connection.prepareStatement("SELECT * FROM categories WHERE categoryID = ?")) {
//            statement.setInt(1, id);
//            ResultSet resultSet = statement.executeQuery();
//            if (resultSet.next()) {
//                category = new Category();
//                category.setCategoryID(resultSet.getInt("categoryID"));
//                category.setCategoryName(resultSet.getString("categoryName"));
//                // Set other properties of category from result set
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        return category;
//    }
//
//    @Override
//    public Category saveCategory(Category category) {
//        try (Connection connection = dataSource.getConnection();
//             PreparedStatement statement = connection.prepareStatement("INSERT INTO categories (categoryName) VALUES (?)", Statement.RETURN_GENERATED_KEYS)) {
//            statement.setString(1, category.getCategoryName());
//            statement.executeUpdate();
//            ResultSet resultSet = statement.getGeneratedKeys();
//            if (resultSet.next()) {
//                category.setCategoryID(resultSet.getInt(1));
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        return category;
//    }
//
//    @Override
//    public void deleteCategory(int id) {
//        try (Connection connection = dataSource.getConnection();
//             PreparedStatement statement = connection.prepareStatement("DELETE FROM categories WHERE categoryID = ?")) {
//            statement.setInt(1, id);
//            statement.executeUpdate();
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//    }
//
//    // Other method implementations
//}
