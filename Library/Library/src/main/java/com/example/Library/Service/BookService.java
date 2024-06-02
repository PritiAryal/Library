package com.example.Library.Service;
//
//import com.example.Library.Domain.Book;
//import com.example.Library.Domain.Author;
//import com.example.Library.Domain.Category;
//import com.example.Library.Repository.AuthorRepository;
//import com.example.Library.Repository.BookRepository;
//import com.example.Library.Repository.CategoryRepository;
//import jakarta.transaction.Transactional;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@RequiredArgsConstructor
//@Service
//public class BookService {
//
//    private final BookRepository bookRepository;
//    private final AuthorRepository authorRepository;
//    private final CategoryRepository categoryRepository;
//
//    @Transactional
//    public List<Book> getAllBooks() {
//        return bookRepository.findAll();
//    }
//
//    @Transactional
//    public Book getBookById(int id) {
//        return bookRepository.findById(id).orElse(null);
//    }
//
//    @Transactional
//    public Book saveBook(Book book) {
//        // Check if the author already exists
//        Optional<Author> existingAuthor = authorRepository.findByName(book.getAuthor().getName());
//        if (existingAuthor.isPresent()) {
//            book.setAuthor(existingAuthor.get());
//        } else {
//            // If author doesn't exist, save the new author
//            Author savedAuthor = authorRepository.save(book.getAuthor());
//            book.setAuthor(savedAuthor);
//        }
//
//        // Check if the category already exists
//        Optional<Category> existingCategory = categoryRepository.findByCategoryName(book.getCategory().getCategoryName());
//        if (existingCategory.isPresent()) {
//            book.setCategory(existingCategory.get());
//        } else {
//            // If category doesn't exist, save the new category
//            Category savedCategory = categoryRepository.save(book.getCategory());
//            book.setCategory(savedCategory);
//        }
//
//        return bookRepository.save(book);
//    }
//
//    @Transactional
//    public void deleteBook(int id) {
//        bookRepository.deleteById(id);
//    }
//}
//
//
////package com.example.Library.Service;
////
////import com.example.Library.Domain.Book;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.stereotype.Service;
////
////import javax.sql.DataSource;
////import java.sql.*;
////import java.util.ArrayList;
////import java.util.List;
////
////@Service
////public class BookService implements com.example.Library.Service.BookService0 {
////
////    @Autowired
////    private DataSource dataSource;
////
////    @Override
////    public List<Book> getAllBooks() {
////        List<Book> books = new ArrayList<>();
////        try (Connection connection = dataSource.getConnection();
////             Statement statement = connection.createStatement();
////             ResultSet resultSet = statement.executeQuery("SELECT * FROM books")) {
////            while (resultSet.next()) {
////                Book book = new Book();
////                // Set book properties from result set
////                books.add(book);
////            }
////        } catch (SQLException e) {
////            e.printStackTrace();
////        }
////        return books;
////    }
////
////    @Override
////    public Book getBookById(int id) {
////        Book book = null;
////        try (Connection connection = dataSource.getConnection();
////             PreparedStatement statement = connection.prepareStatement("SELECT * FROM books WHERE bookID = ?")) {
////            statement.setInt(1, id);
////            ResultSet resultSet = statement.executeQuery();
////            if (resultSet.next()) {
////                book = new Book();
////                // Set book properties from result set
////            }
////        } catch (SQLException e) {
////            e.printStackTrace();
////        }
////        return book;
////    }
////
////    @Override
////    public Book saveBook(Book book) {
////        try (Connection connection = dataSource.getConnection();
////             PreparedStatement statement = connection.prepareStatement("INSERT INTO books (title, ISBN, publisher, yearPublished, categoryID_FK, authorID_FK) VALUES (?, ?, ?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS)) {
////            statement.setString(1, book.getTitle());
////            statement.setString(2, book.getISBN());
////            statement.setString(3, book.getPublisher());
////            statement.setInt(4, book.getYearPublished());
////            statement.setInt(5, book.getCategory().getCategoryID());
////            statement.setInt(6, book.getAuthor().getAuthorID());
////            statement.executeUpdate();
////            ResultSet resultSet = statement.getGeneratedKeys();
////            if (resultSet.next()) {
////                book.setBookID(resultSet.getInt(1));
////            }
////        } catch (SQLException e) {
////            e.printStackTrace();
////        }
////        return book;
////    }
////
////    @Override
////    public void deleteBook(int id) {
////        try (Connection connection = dataSource.getConnection();
////             PreparedStatement statement = connection.prepareStatement("DELETE FROM books WHERE bookID = ?")) {
////            statement.setInt(1, id);
////            statement.executeUpdate();
////        } catch (SQLException e) {
////            e.printStackTrace();
////        }
////    }
////
////    // Other method implementations
////}
////


//package com.example.Library.Service;
//
//import com.example.Library.Domain.Book;
//import com.example.Library.Domain.Author;
//import com.example.Library.Domain.Category;
//import com.example.Library.Repository.AuthorRepository;
//import com.example.Library.Repository.BookRepository;
//import com.example.Library.Repository.CategoryRepository;
//import jakarta.transaction.Transactional;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@RequiredArgsConstructor
//@Service
//public class BookService {
//
//    private final BookRepository bookRepository;
//    private final AuthorRepository authorRepository;
//    private final CategoryRepository categoryRepository;
//
//    @Transactional
//    public List<Book> getAllBooks() {
//        return bookRepository.findAll();
//    }
//
//    @Transactional
//    public Book getBookById(int id) {
//        return bookRepository.findById(id);
//    }
//
//    @Transactional
//    public Book saveBook(Book book) {
//        // Check if the author already exists
//        Optional<Author> existingAuthor = authorRepository.findByName(book.getAuthor().getName());
//        if (existingAuthor.isPresent()) {
//            book.setAuthor(existingAuthor.get());
//        } else {
//            // If author doesn't exist, save the new author
//            Author savedAuthor = authorRepository.save(book.getAuthor());
//            book.setAuthor(savedAuthor);
//        }
//
//        // Check if the category already exists
//        Optional<Category> existingCategory = categoryRepository.findByCategoryName(book.getCategory().getCategoryName());
//        if (existingCategory.isPresent()) {
//            book.setCategory(existingCategory.get());
//        } else {
//            // If category doesn't exist, save the new category
//            Category savedCategory = categoryRepository.save(book.getCategory());
//            book.setCategory(savedCategory);
//        }
//
//        return bookRepository.save(book);
//    }
//
//    @Transactional
//    public void deleteBook(int id) {
//        bookRepository.deleteById(id);
//    }
//}


import com.example.Library.Domain.Book;
import com.example.Library.Domain.Author;
import com.example.Library.Domain.Category;
import com.example.Library.Domain.Loan;
import com.example.Library.Exception.ResourceNotFoundException;
import com.example.Library.Repository.AuthorRepository;
import com.example.Library.Repository.BookRepository;
import com.example.Library.Repository.CategoryRepository;
import com.example.Library.Repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;
    private final CategoryRepository categoryRepository;

    private final LoanRepository loanRepository;

    @Autowired
    public BookService(BookRepository bookRepository, AuthorRepository authorRepository, CategoryRepository categoryRepository, LoanRepository loanRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
        this.categoryRepository = categoryRepository;
        this.loanRepository = loanRepository;
    }

        @Transactional
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Transactional
    public Book getBookById(int id) {
        return bookRepository.findById(id);
    }

//    @Transactional
//    public Optional<Book> findById(Integer id) {
//        return bookRepository.findById(id);
//    }


    @Transactional
    public Book saveBook(Book book) {
        // Check if the author already exists
        Optional<Author> existingAuthor = authorRepository.findByName(book.getAuthor().getName());
        if (existingAuthor.isPresent()) {
            book.setAuthor(existingAuthor.get());
        } else {
            // If author doesn't exist, save the new author and set it to the book
            Author newAuthor = authorRepository.save(book.getAuthor());
            book.setAuthor(newAuthor);
        }

        // Check if the category already exists
        Optional<Category> existingCategory = categoryRepository.findByCategoryName(book.getCategory().getCategoryName());
        if (existingCategory.isPresent()) {
            book.setCategory(existingCategory.get());
        } else {
            // If category doesn't exist, save the new category and set it to the book
            Category newCategory = categoryRepository.save(book.getCategory());
            book.setCategory(newCategory);
        }

        // Save the book
        return bookRepository.save(book);
    }

    public Book updateBookWithAssociations(Integer bookId, Book bookDetails) {
        Optional<Book> optionalBook = bookRepository.findById(bookId);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();

            // Update book details
            book.setTitle(bookDetails.getTitle());
            book.setISBN(bookDetails.getISBN());
            book.setPublisher(bookDetails.getPublisher());
            book.setYearPublished(bookDetails.getYearPublished());

            // Update Author if provided
            if (bookDetails.getAuthor() != null) {
                Author author = authorRepository.findById(bookDetails.getAuthor().getAuthorID())
                        .orElseThrow(() -> new ResourceNotFoundException("Author not found"));
                book.setAuthor(author);
            }

            // Update Category if provided
            if (bookDetails.getCategory() != null) {
                Category category = categoryRepository.findById(bookDetails.getCategory().getCategoryID())
                        .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
                book.setCategory(category);
            }

            // Update Loans if provided
            if (bookDetails.getLoans() != null) {
                book.getLoans().clear();
                for (Loan loan : bookDetails.getLoans()) {
                    Loan existingLoan = loanRepository.findById(loan.getLoanID())
                            .orElseThrow(() -> new ResourceNotFoundException("Loan not found"));
                    book.getLoans().add(existingLoan);
                }
            }

            return bookRepository.save(book);
        } else {
            throw new ResourceNotFoundException("Book not found");
        }
    }




    @Transactional
    public void deleteBook(int id) {
        bookRepository.deleteById(id);
    }
}

