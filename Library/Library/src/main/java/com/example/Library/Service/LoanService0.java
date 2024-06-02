package com.example.Library.Service;

import com.example.Library.Domain.Loan;

import java.util.List;

public interface LoanService0 {
    List<Loan> getAllLoans();
    Loan getLoanById(int id);
    Loan saveLoan(Loan loan);
    void deleteLoan(int id);
    // Other methods as needed
}