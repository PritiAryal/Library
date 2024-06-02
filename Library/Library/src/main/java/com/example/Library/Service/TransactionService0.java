package com.example.Library.Service;

import com.example.Library.Domain.Transaction;

import java.util.List;

public interface TransactionService0 {
    List<Transaction> getAllTransaction();
    Transaction getTransactionById(int id);
    Transaction saveTransaction(Transaction transaction);
    void deleteTransaction(int id);
    // Other methods as needed
}