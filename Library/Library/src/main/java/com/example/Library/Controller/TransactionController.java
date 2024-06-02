package com.example.Library.Controller;

import com.example.Library.Domain.Author;
import com.example.Library.Domain.Transaction;
import com.example.Library.Repository.TransactionRepository;
import com.example.Library.Service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//@RestController
@RequiredArgsConstructor
@CrossOrigin
@Controller
@RequestMapping("/api/transaction")
public class TransactionController {

   // @Autowired
    private final TransactionService transactionService;

    //@Autowired
    //private final TransactionRepository transactionRepository;


    @GetMapping
    public ResponseEntity<List<Transaction>> getAllTransaction() {
        List<Transaction> transaction = transactionService.getAllTransaction();
        return new ResponseEntity<>(transaction, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getStaffById(@PathVariable int id) {
        Transaction transaction = transactionService.getTransactionById(id);
        return new ResponseEntity<>(transaction, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Transaction> saveStaff(@RequestBody Transaction staff) {
        Transaction savedTransaction = transactionService.saveTransaction(staff);
        return new ResponseEntity<>(savedTransaction, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Transaction> updateTransaction(@PathVariable Integer id, @RequestBody Transaction transactionDetails) {
        Optional<Transaction> transaction = transactionService.findById(id);
        if (transaction.isPresent()) {
            transactionDetails.setTransactionID(id);
            return ResponseEntity.ok(transactionService.saveTransaction(transactionDetails));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable int id) {
        transactionService.deleteTransaction(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Other methods as needed
}
