//package com.example.Library.Service;
//
//import com.example.Library.Domain.Author;
//import com.example.Library.Repository.AuthorRepository;
//import jakarta.transaction.Transactional;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@RequiredArgsConstructor
//@Service
//public class AuthorService implements AuthorService {
//
//
//   //@Autowired
//    private final AuthorRepository authorRepository;
//
//    @Transactional
//    public List<Author> getAllAuthors() {
//        return authorRepository.findAll();
//    }
//
//    @Transactional
//    public Author getAuthorById(Integer id) {
//        return authorRepository.findById(id).orElse(null);
//    }
//
//
////    @Override
//@Transactional
//    public Author saveAuthor(Author author) {
//        return authorRepository.save(author);
//    }
//
////    @Override
//@Transactional
//    public void deleteAuthor(Integer id) {
//        authorRepository.deleteById(id);
//    }
//
//    // Other method implementations
//}
//
//
//// AuthorService.java
////package com.example.Library.Service;
////
////import com.example.Library.Domain.Author;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.stereotype.Service;
////
////import javax.sql.DataSource;
////import java.sql.*;
////import java.util.ArrayList;
////import java.util.List;
////
////@Service
////public class AuthorService implements AuthorService {
////
////    @Autowired
////    private DataSource dataSource;
////
////    @Override
////    public List<Author> getAllAuthors() {
////        List<Author> authors = new ArrayList<>();
////        try (Connection connection = dataSource.getConnection();
////             Statement statement = connection.createStatement();
////             ResultSet resultSet = statement.executeQuery("SELECT * FROM authors")) {
////            while (resultSet.next()) {
////                Author author = new Author();
////                // Set author properties from result set
////                authors.add(author);
////            }
////        } catch (SQLException e) {
////            e.printStackTrace();
////        }
////        return authors;
////    }
////
////    @Override
////    public Author getAuthorById(int id) {
////        Author author = null;
////        try (Connection connection = dataSource.getConnection();
////             PreparedStatement statement = connection.prepareStatement("SELECT * FROM authors WHERE authorID = ?")) {
////            statement.setInt(1, id);
////            ResultSet resultSet = statement.executeQuery();
////            if (resultSet.next()) {
////                author = new Author();
////                // Set author properties from result set
////            }
////        } catch (SQLException e) {
////            e.printStackTrace();
////        }
////        return author;
////    }
////
////    @Override
////    public Author saveAuthor(Author author) {
////        try (Connection connection = dataSource.getConnection();
////             PreparedStatement statement = connection.prepareStatement("INSERT INTO authors (name, biography) VALUES (?, ?)", Statement.RETURN_GENERATED_KEYS)) {
////            statement.setString(1, author.getName());
////            statement.setString(2, author.getBiography());
////            statement.executeUpdate();
////            ResultSet resultSet = statement.getGeneratedKeys();
////            if (resultSet.next()) {
////                author.setAuthorID(resultSet.getInt(1));
////            }
////        } catch (SQLException e) {
////            e.printStackTrace();
////        }
////        return author;
////    }
////
////    @Override
////    public void deleteAuthor(int id) {
////        try (Connection connection = dataSource.getConnection();
////             PreparedStatement statement = connection.prepareStatement("DELETE FROM authors WHERE authorID = ?")) {
////            statement.setInt(1, id);
////            statement.executeUpdate();
////        } catch (SQLException e) {
////            e.printStackTrace();
////        }
////    }
////
////    // Other method implementations
////}


package com.example.Library.Service;

import com.example.Library.Domain.Author;
import com.example.Library.Repository.AuthorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class AuthorService { //implements AuthorService {

    //@Autowired
    private final AuthorRepository authorRepository;

//    @Autowired
//    private BookRepository bookRepository;

    @Transactional
    //@Override
    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    @Transactional
    //@Override
    public Author getAuthorById(int id) {
        return authorRepository.findById(id);//.orElse(null);
    }

    @Transactional
    //@Override
    public Author saveAuthor(Author author) {
        return authorRepository.save(author);
    }

    @Transactional
   // @Override
    public void deleteAuthor(int id) {
        authorRepository.deleteById(id);
    }

//    @Transactional
//    //@Override
//    public Author createAuthor(String name, String biography) {
//        Author author = new Author();
//        author.setName(name);
//        author.setBiography(biography);
//        return authorRepository.save(author);
//    }
//@Transactional
//public Author create(Integer bookId, Author author) {
//    return bookRepository.findById(bookId).map(book -> {
//        author.setBook(book);
//        return authorRepository.save(author);
//    }).orElseThrow(() -> new RuntimeException("Not found Applicationuser with id = " + bookId));
//}
}
