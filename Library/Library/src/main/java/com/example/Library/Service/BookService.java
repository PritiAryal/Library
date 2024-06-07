package com.example.Library.Service;

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





//import com.example.Library.Domain.Book;
//import com.example.Library.Domain.Author;
//import com.example.Library.Domain.Category;
//import com.example.Library.Domain.Loan;
//import com.example.Library.Exception.ResourceNotFoundException;
//import com.example.Library.Repository.AuthorRepository;
//import com.example.Library.Repository.BookRepository;
//import com.example.Library.Repository.CategoryRepository;
//import com.example.Library.Repository.LoanRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import javax.persistence.criteria.CriteriaBuilder;
//import java.util.List;
//import java.util.Optional;
//
//@RequiredArgsConstructor
//@Service
//public class BookService {
//
//    //@Autowired
//    private final BookRepository bookRepository;
//    //@Autowired
//    private final AuthorRepository authorRepository;
//    //@Autowired
//    private final CategoryRepository categoryRepository;
//
//    //@Autowired
//    private final LoanRepository loanRepository;
//
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
//    public Optional<Book> findById(Integer id) {
//        return bookRepository.findById(id);
//    }
//
//
////    @Transactional
////    public Book saveBook(Book book) {
////         //Check if the author already exists
//////        Optional<Author> existingAuthor = authorRepository.findByName(book.getAuthor().getName());
//////        if (existingAuthor.isPresent()) {
//////            book.setAuthor(existingAuthor.get());
//////        } else {
//////            // If author doesn't exist, save the new author and set it to the book
//////            Author newAuthor = authorRepository.save(book.getAuthor());
//////            book.setAuthor(newAuthor);
//////        }
//////        Optional<Category> existingCategory = categoryRepository.findByCategoryName(book.getCategory().getCategoryName());
//////        if (existingCategory.isPresent()) {
//////            book.setCategory(existingCategory.get());
//////        } else {
//////            // If category doesn't exist, save the new category and set it to the book
//////            Category newCategory = categoryRepository.save(book.getCategory());
//////            book.setCategory(newCategory);
//////        }
////
////        Author author = book.getAuthor();
////        if (author != null) {
////            // Check if the author already exists
////            Optional<Author> existingAuthor = authorRepository.findByName(author.getName());
////            if (existingAuthor.isPresent()) {
////                book.setAuthor(existingAuthor.get());
////            } else {
////                // If author doesn't exist, save the new author and set it to the book
////                Author newAuthor = authorRepository.save(author);
////                book.setAuthor(newAuthor);
////            }
////        }
////        Category category = book.getCategory();
////        if (category != null) {
////            // Check if the category already exists
////            Optional<Category> existingCategory = categoryRepository.findByCategoryName(category.getCategoryName());
////            if (existingCategory.isPresent()) {
////                book.setCategory(existingCategory.get());
////            } else {
////                // If category doesn't exist, save the new category and set it to the book
////                Category newCategory = categoryRepository.save(category);
////                book.setCategory(newCategory);
////            }
////        }
////
////        // Save the book
////        return bookRepository.save(book);
////    }
////@Override
////    @Transactional
////    public Book saveBook(Book book) {
////        return bookRepository.save(book);
////    }
//@Transactional
//public Book saveBook(Book book, Integer categoryID, Integer authorID) {
//    // Fetch the Category entity from the database using the provided categoryID
//    Category category = categoryRepository.findById(categoryID)
//            .orElseThrow(() -> new RuntimeException("Category not found"));
//
//    // Fetch the Author entity from the database using the provided authorID
//    Author author = authorRepository.findById(authorID)
//            .orElseThrow(() -> new RuntimeException("Author not found"));
//
//    // Set the Category and Author entities to the Book instance
//    book.setCategory(category);
//    book.setAuthor(author);
//
//    // Save the Book instance
//    return bookRepository.save(book);
//}
//
//
////    @Transactional
////    public Book updateBookWithAssociations(Integer bookId, Book bookDetails) {
////        Optional<Book> optionalBook = bookRepository.findById(bookId);
////        if (optionalBook.isPresent()) {
////            Book book = optionalBook.get();
////
////            // Update book details
////            book.setTitle(bookDetails.getTitle());
////            book.setISBN(bookDetails.getISBN());
////            book.setPublisher(bookDetails.getPublisher());
////            book.setYearPublished(bookDetails.getYearPublished());
////
////            // Update Author if provided
////            if (bookDetails.getAuthor() != null) {
////                Author author = authorRepository.findById(bookDetails.getAuthor().getAuthorID())
////                        .orElseThrow(() -> new ResourceNotFoundException("Author not found"));
////                book.setAuthor(author);
////            }
////
////            // Update Category if provided
////            if (bookDetails.getCategory() != null) {
////                Category category = categoryRepository.findById(bookDetails.getCategory().getCategoryID())
////                        .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
////                book.setCategory(category);
////            }
////
////            // Update Loans if provided
////            if (bookDetails.getLoans() != null) {
////                book.getLoans().clear();
////                for (Loan loan : bookDetails.getLoans()) {
////                    Loan existingLoan = loanRepository.findById(loan.getLoanID())
////                            .orElseThrow(() -> new ResourceNotFoundException("Loan not found"));
////                    book.getLoans().add(existingLoan);
////                }
////            }
////
////            return bookRepository.save(book);
////        } else {
////            throw new ResourceNotFoundException("Book not found");
////        }
////    }
//
//    @Transactional
//    public Book updateBook(Integer bookId, Book updatedBook) {
//        Optional<Book> optionalBook = bookRepository.findById(bookId);
//        if (optionalBook.isPresent()) {
//            Book existingBook = optionalBook.get();
//
//            existingBook.setTitle(updatedBook.getTitle());
//            existingBook.setISBN(updatedBook.getISBN());
//            existingBook.setPublisher(updatedBook.getPublisher());
//            existingBook.setYearPublished(updatedBook.getYearPublished());
//
//            // Directly update author and category
//            existingBook.setAuthor(updatedBook.getAuthor());
//            existingBook.setCategory(updatedBook.getCategory());
//
//            return bookRepository.save(existingBook);
//        } else {
//            throw new IllegalArgumentException("Book with ID " + bookId + " not found");
//        }
//    }
//
////    public Optional<Author> findAuthorById(Integer authorId) {
////        return authorRepository.findById(authorId);
////    }
////
////    public Optional<Category> findCategoryById(Integer categoryId) {
////        return categoryRepository.findById(categoryId);
////    }
//
//
//    @Transactional
//    public void deleteBook(int id) {
//        bookRepository.deleteById(id);
//    }
//}
//


//import com.example.Library.Domain.*;
//import com.example.Library.Exception.ResourceNotFoundException;
//import com.example.Library.Repository.*;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
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
//    private final LoanRepository loanRepository;
//    private final OperationRepository operationRepository;
//    private final StaffRepository staffRepository;
//
//    @Transactional
//    public List<Book> getAllBooks() {
//        return bookRepository.findAll();
//    }
//
//    @Transactional
//    public Book getBookById(int id) {
//        return bookRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
//    }
//
//    @Transactional
//    public Book saveBook(Book book, Integer categoryID, Integer authorID, Integer staffID, String operationType) {
//        Category category = categoryRepository.findById(categoryID)
//                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
//        Author author = authorRepository.findById(authorID)
//                .orElseThrow(() -> new ResourceNotFoundException("Author not found"));
//        Staff staff = staffRepository.findById(staffID)
//                .orElseThrow(() -> new ResourceNotFoundException("Staff not found"));
//
//        book.setCategory(category);
//        book.setAuthor(author);
//        Book savedBook = bookRepository.save(book);
//
//        Operation operation = new Operation();
//        operation.setBook(savedBook);
//        operation.setStaff(staff);
//        operation.setPerformedDate(new java.util.Date());
//        operation.setOperationType(operationType);
//        operationRepository.save(operation);
//
//        return savedBook;
//    }
//
//    @Transactional
//    public Book updateBook(Integer bookId, Book updatedBook, Integer staffID, String operationType) {
//        Book existingBook = bookRepository.findById(bookId)
//                .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
//
//        existingBook.setTitle(updatedBook.getTitle());
//        existingBook.setISBN(updatedBook.getISBN());
//        existingBook.setPublisher(updatedBook.getPublisher());
//        existingBook.setYearPublished(updatedBook.getYearPublished());
//        existingBook.setAuthor(updatedBook.getAuthor());
//        existingBook.setCategory(updatedBook.getCategory());
//
//        Book savedBook = bookRepository.save(existingBook);
//
//        Staff staff = staffRepository.findById(staffID)
//                .orElseThrow(() -> new ResourceNotFoundException("Staff not found"));
//
//        Operation operation = new Operation();
//        operation.setBook(savedBook);
//        operation.setStaff(staff);
//        operation.setPerformedDate(new java.util.Date());
//        operation.setOperationType(operationType);
//        operationRepository.save(operation);
//
//        return savedBook;
//    }
//
//    @Transactional
//    public void deleteBook(int id, Integer staffID) {
//        Book book = bookRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
//        bookRepository.deleteById(id);
//
//        Staff staff = staffRepository.findById(staffID)
//                .orElseThrow(() -> new ResourceNotFoundException("Staff not found"));
//
//        Operation operation = new Operation();
//        operation.setBook(book);
//        operation.setStaff(staff);
//        operation.setPerformedDate(new java.util.Date());
//        operation.setOperationType("Delete");
//        operationRepository.save(operation);
//    }
//}
//


import com.example.Library.Domain.*;
import com.example.Library.Exception.ResourceNotFoundException;
import com.example.Library.Repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class BookService {

    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;
    private final CategoryRepository categoryRepository;
    private final OperationRepository operationRepository;
    private final StaffRepository staffRepository;

    @Transactional
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Transactional
    public Book getBookById(int id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with ID " + id));
    }

    @Transactional
    public Optional<Book> findById(Integer id) {
        return bookRepository.findById(id);
    }

    @Transactional
    public Book saveBook(Book book, Integer categoryID, Integer authorID, Integer staffID, String operationType) {
        Category category = categoryRepository.findById(categoryID)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        Author author = authorRepository.findById(authorID)
                .orElseThrow(() -> new RuntimeException("Author not found"));


        book.setCategory(category);
        book.setAuthor(author);

        Book savedBook = bookRepository.save(book);

        createOperation(savedBook, staffID, operationType);

        return savedBook;
    }

    @Transactional
    public Book updateBook(Integer bookId, Book updatedBook, Integer staffID, String operationType) {
        Book existingBook = bookRepository.findById(bookId)
                .orElseThrow(() -> new IllegalArgumentException("Book with ID " + bookId + " not found"));

        existingBook.setTitle(updatedBook.getTitle());
        existingBook.setISBN(updatedBook.getISBN());
        existingBook.setPublisher(updatedBook.getPublisher());
        existingBook.setYearPublished(updatedBook.getYearPublished());
        existingBook.setAuthor(updatedBook.getAuthor());
        existingBook.setCategory(updatedBook.getCategory());

        Book savedBook = bookRepository.save(existingBook);

        createOperation(savedBook, staffID, operationType);

        return savedBook;
    }

    @Transactional
    public void deleteBook(int id, Integer staffID) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Book with ID " + id +" not found"));

        bookRepository.deleteById(id);

        createOperation(book, staffID, "Delete");
    }



    private void createOperation(Book book, Integer staffID, String operationType) {
        Staff staff = staffRepository.findById(staffID)
                .orElseThrow(() -> new RuntimeException("Staff not found"));

        Operation operation = new Operation();
        operation.setBook(book);
        operation.setStaff(staff); // Set the Staff object
        operation.setPerformedDate(new Date());
        operation.setOperationType(operationType);
        operationRepository.save(operation);
    }
}
