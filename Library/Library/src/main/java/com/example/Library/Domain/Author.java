//// Author.java
//package com.example.Library.Domain;
//
//
//import java.util.Set;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//
//import javax.persistence.*;
//import javax.persistence.CascadeType;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.OneToMany;
//
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@Entity
//public class Author {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer authorID;
//    private String name;
//    private String biography;
//
//    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
//    private Set<Book> books;
//
////    public Author(String name, String biography) {
////        this.name = name;
////        this.biography = biography;
////    }
////
////    // Getters and Setters
////    public int getAuthorID() {
////        return authorID;
////    }
////
////    public void setAuthorID(int authorID) {
////        this.authorID = authorID;
////    }
////
////    public String getName() {
////        return name;
////    }
////
////    public void setName(String name) {
////        this.name = name;
////    }
////
////    public String getBiography() {
////        return biography;
////    }
////
////    public void setBiography(String biography) {
////        this.biography = biography;
////    }
////
////    public Set<Book> getBooks() {
////        return books;
////    }
////
////    public void setBooks(Set<Book> books) {
////        this.books = books;
////    }
//}
//


package com.example.Library.Domain;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import javax.persistence.OneToMany;
//import javax.persistence.CascadeType;
import jakarta.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer authorID;
    private String name;
    private String biography;

    @OneToMany( fetch = FetchType.LAZY, mappedBy = "author", cascade = CascadeType.ALL, orphanRemoval = true)
    //private Set<Book> books;
    private List<Book> books = new ArrayList<>();
}

