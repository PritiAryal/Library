package com.example.Library.Service;

import com.example.Library.Domain.Transaction;
import com.example.Library.Repository.TransactionRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TransactionService { //implements TransactionService0 {

    //@Autowired
    private final TransactionRepository transactionRepository;

    //@Override
    @Transactional
    public List<Transaction> getAllTransaction() {
        return transactionRepository.findAll();
    }

    //@Override
    @Transactional
    public Transaction getTransactionById(int id) {
        return transactionRepository.findById(id);//.orElse(null);
    }

    //@Override
    @Transactional
    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    //@Override
    @Transactional
    public void deleteTransaction(int id) {
        transactionRepository.deleteById(id);
    }

    // Other method implementations
}