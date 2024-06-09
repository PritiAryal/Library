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
//        @GetMapping
//        public ResponseEntity<List<Loan>> getAllLoans() {
//            List<Loan> loans = loanService.getAllLoansWithBookAndMember();
//            return new ResponseEntity<>(loans, HttpStatus.OK);
//        }

    @GetMapping("/loan-details")
    public ResponseEntity<List<Object[]>> getLoanDetailsByMemberIDAndBookID(@RequestParam Integer memberID, @RequestParam Integer bookID) {
        List<Object[]> loanDetails = loanService.findAllWithBookTitleAndMemberNameByMemberIDAndBookID(memberID, bookID);
        if (loanDetails.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return new ResponseEntity<>(loanDetails, HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Loan> getLoanById(@PathVariable int id) {
        Loan loan = loanService.getLoanById(id);
        return new ResponseEntity<>(loan, HttpStatus.OK);
    }

//    @PostMapping
//    public ResponseEntity<Loan> saveLoan(@RequestParam Integer bookID, @RequestParam Integer memberID, @RequestBody Loan loan) {
//        try {
//            Loan savedLoan = loanService.saveLoan(bookID, memberID, loan);
//            return new ResponseEntity<>(savedLoan, HttpStatus.CREATED);
//        } catch (IllegalArgumentException e) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

//    @PutMapping("/{id}")
//    public ResponseEntity<Loan> updateLoan(@PathVariable int id, @RequestParam Integer bookID, @RequestParam Integer memberID, @RequestBody Loan loanDetails) {
//        Optional<Loan> loan = loanService.findById(id);
//        if (loan.isPresent()) {
//            loanDetails.setLoanID(id);
//            try {
//                Loan updatedLoan = loanService.saveLoan(bookID, memberID, loanDetails);
//                return ResponseEntity.ok(updatedLoan);
//            } catch (IllegalArgumentException e) {
//                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//            }
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @PostMapping
    public ResponseEntity<Loan> saveLoan(@RequestParam Integer bookID, @RequestParam Integer memberID, @RequestBody Loan loan) {
        Loan savedLoan = loanService.saveLoan(bookID, memberID, loan);
        return new ResponseEntity<>(savedLoan, HttpStatus.CREATED);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<Loan> updateLoan(@PathVariable int id, @RequestBody Loan loanDetails) {
//        Optional<Loan> loan = Optional.ofNullable(loanService.getLoanById(id));
//        if (loan.isPresent()) {
//            loanDetails.setLoanID(id);
//            return ResponseEntity.ok(loanService.saveLoan(loanDetails.getBook().getBookID(), loanDetails.getMember().getMemberID(), loanDetails));
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @PutMapping("/{id}")
    public ResponseEntity<Loan> updateLoan(@PathVariable int id, @RequestBody Loan loanDetails) {
        Loan existingLoan = loanService.getLoanById(id);

        // Avoid updating primary and foreign keys
        loanDetails.setLoanID(id);
        if (existingLoan.getBook() != null) {
            loanDetails.setBook(existingLoan.getBook());
        }
        if (existingLoan.getMember() != null) {
            loanDetails.setMember(existingLoan.getMember());
        }

        // Update only the common fields
        Loan updatedLoan = loanService.saveLoan(existingLoan.getBook().getBookID(), existingLoan.getMember().getMemberID(), loanDetails);

        return ResponseEntity.ok(updatedLoan);
    }


    @PatchMapping("/{id}/status")
    public ResponseEntity<Loan> updateLoanStatus(@PathVariable int id, @RequestParam String status) {
        try {
            Loan updatedLoan = loanService.updateLoanStatus(id, status);
            return new ResponseEntity<>(updatedLoan, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoan(@PathVariable int id) {
        loanService.deleteLoan(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
//
//    @GetMapping
//    public ResponseEntity<List<Loan>> getAllLoans() {
//        List<Loan> loans = loanService.getAllLoans();
//        return new ResponseEntity<>(loans, HttpStatus.OK);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Loan> getLoanById(@PathVariable int id) {
//        Loan loan = loanService.getLoanById(id);
//        return new ResponseEntity<>(loan, HttpStatus.OK);
//    }
//
//    @PostMapping
//    public ResponseEntity<Loan> saveLoan(@RequestBody Loan loan) {
//        Loan savedLoan = loanService.saveLoan(loan);
//        return new ResponseEntity<>(savedLoan, HttpStatus.CREATED);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<Loan> updateLoan(@PathVariable int id, @RequestBody Loan loanDetails) {
//        Optional<Loan> loan = loanService.findById(id);
//        if (loan.isPresent()) {
//            loanDetails.setLoanID(id);
//            return ResponseEntity.ok(loanService.saveLoan(loanDetails));
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteLoan(@PathVariable int id) {
//        loanService.deleteLoan(id);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }

    // Other methods as needed
}