package com.example.Library.Service;

import com.example.Library.Domain.Book;

import java.util.List;

public interface BookService0 {
    List<Book> getAllBooks();
    Book getBookById(int id);
    Book saveBook(Book book);
    void deleteBook(int id);
    // Other methods as needed
}