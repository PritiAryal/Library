package com.example.Library.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import javax.persistence.*;
import jakarta.persistence.*;

import java.util.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer loanID;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "bookID", referencedColumnName = "bookID", nullable = false)
    private Book book;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "memberID", referencedColumnName = "memberID", nullable = false)
    private Member member;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "loan", cascade = CascadeType.ALL, orphanRemoval = true)
    //private Set<Transaction> transactions = new HashSet<>();
    private List<Transaction> transactions = new ArrayList<>();

    private Date loanDate;
    private Date dueDate;
    private Date returnDate;
    private String status; // New field

    // Custom logic for setting return date based on status
    public void setStatus(String status) {
        this.status = status;
        if ("returned".equalsIgnoreCase(status)) {
            this.returnDate = new Date();
        } else {
            this.returnDate = new Date(0); // Default to epoch time
        }
    }
}

//    public Loan(Book book, Member member, Date loanDate, Date dueDate) {
//        this.book = book;
//        this.member = member;
//        this.loanDate = loanDate;
//        this.dueDate = dueDate;
//    }
//
//    // Getters and Setters
//    public int getLoanID() {
//        return loanID;
//    }
//
//    public void setLoanID(int loanID) {
//        this.loanID = loanID;
//    }
//
//    public Book getBook() {
//        return book;
//    }
//
//    public void setBook(Book book) {
//        this.book = book;
//    }
//
//    public Member getMember() {
//        return member;
//    }
//
//    public void setMember(Member member) {
//        this.member = member;
//    }
//
//    public Date getLoanDate() {
//        return loanDate;
//    }
//
//    public void setLoanDate(Date loanDate) {
//        this.loanDate = loanDate;
//    }
//
//    public Date getDueDate() {
//        return dueDate;
//    }
//
//    public void setDueDate(Date dueDate) {
//        this.dueDate = dueDate;
//    }
//
//    public Date getReturnDate() {
//        return returnDate;
//    }
//
//    public void setReturnDate(Date returnDate) {
//        this.returnDate = returnDate;
//    }




