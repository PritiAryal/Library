package com.example.Library.Controller;

import com.example.Library.Domain.Loan;
import com.example.Library.Repository.LoanRepository;
import com.example.Library.Service.CategoryService;
import com.example.Library.Service.LoanService;
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
@RequestMapping("/api/loan")
public class LoanController {

    //@Autowired
    private final LoanService loanService;

    //@Autowired
    private final LoanRepository loanRepository;

    @GetMapping
    public ResponseEntity<List<Loan>> getAllLoans() {
        List<Loan> loans = loanService.getAllLoans();
        return new ResponseEntity<>(loans, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Loan> getLoanById(@PathVariable int id) {
        Loan loan = loanService.getLoanById(id);
        return new ResponseEntity<>(loan, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Loan> saveLoan(@RequestBody Loan loan) {
        Loan savedLoan = loanService.saveLoan(loan);
        return new ResponseEntity<>(savedLoan, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Loan> updateLoan(@PathVariable int id, @RequestBody Loan loanDetails) {
        Optional<Loan> loan = loanService.findById(id);
        if (loan.isPresent()) {
            loanDetails.setLoanID(id);
            return ResponseEntity.ok(loanService.saveLoan(loanDetails));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoan(@PathVariable int id) {
        loanService.deleteLoan(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Other methods as needed
}