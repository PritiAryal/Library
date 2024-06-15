package com.example.Library.Controller;

import com.example.Library.Domain.BookHistory;
import com.example.Library.Domain.Operation;
import com.example.Library.Repository.BookHistoryRepository;
import com.example.Library.Service.OperationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import org.hibernate.Hibernate;

@RequiredArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/api")
public class DashboardController {

    private final OperationService operationService;
    private BookHistoryRepository bookHistoryRepository;

    @GetMapping("/staff/{staffID}/operations")
    public ResponseEntity<List<Operation>> getOperationsByStaffId(@PathVariable Integer staffID) {
        List<Operation> operations = operationService.getOperationsByStaffId(staffID);
        return new ResponseEntity<>(operations, HttpStatus.OK);
    }

//    @GetMapping("/staff/{staffId}/operations")
//    public List<Object> getOperationsWithBooks(@PathVariable Integer staffId) {
//        List<Operation> operations = operationService.getOperationsByStaffId(staffId);
//        List<Object> result = new ArrayList<>();
//
//        for (Operation operation : operations) {
//            // Check if book exists or is deleted
//
//            Hibernate.initialize(operation.getBook());
//
//            if (operation.getBook() != null) {
//                result.add(operation.getBook());
//            } else {
//                // Fetch from book history if the book is deleted
//                BookHistory bookHistory = bookHistoryRepository.findByOriginalBookID(operation.getBook().getBookID());
//                result.add(bookHistory);
//            }
//        }
//
//        return result;
//    }

    @GetMapping("/book/{bookID}/operations")
    public ResponseEntity<List<Operation>> getOperationsByBookId(@PathVariable Integer bookID) {
        List<Operation> operations = operationService.getOperationsByBookId(bookID);
        return new ResponseEntity<>(operations, HttpStatus.OK);
    }

    @GetMapping("/operations")
    public ResponseEntity<List<Operation>> getOperationsByType(@RequestParam String type) {
        List<Operation> operations = operationService.getOperationsByType(type);
        return new ResponseEntity<>(operations, HttpStatus.OK);
    }

    // Other methods...
}
