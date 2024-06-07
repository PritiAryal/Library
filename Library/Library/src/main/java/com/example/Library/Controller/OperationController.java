package com.example.Library.Controller;

import com.example.Library.Domain.Operation;
import com.example.Library.Domain.OperationDTO;
import com.example.Library.Repository.OperationRepository;
import com.example.Library.Service.OperationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

//@RestController
@RequiredArgsConstructor
@CrossOrigin
@Controller
@RequestMapping("/api/operation")
public class OperationController {

    //@Autowired
    private final OperationService operationService;

    //@Autowired
    private final OperationRepository operationRepository;

//    @GetMapping("/operations")
//    public List<OperationDTO> getAllOperation() {
//        // Retrieve all operations from the database
//        List<Operation> operations = operationRepository.findAll();
//
//        // Optionally, you can map the operations to a DTO if you want to customize the response
//        List<OperationDTO> operationDTOs = operations.stream()
//                .map(operation -> new OperationDTO(
//                        operation.getOperationID(),
//                        operation.getBook().getBookID(), // Include bookID
//                        operation.getStaff().getStaffID() ,
//                        operation.getPerformedDate(),
//                        operation.getOperationType()// Include staffID
//                ))
//                .collect(Collectors.toList());
//
//        return operationDTOs;
//    }

//    @GetMapping("/operations")
//    public ResponseEntity<List<Operation>> getOperationsByStaffAndBook(
//            @RequestParam("staffID") Integer staffID,
//            @RequestParam("bookID") Integer bookID) {
//        List<Operation> operations = operationService.getOperationsByStaffAndBook(staffID, bookID);
//        return new ResponseEntity<>(operations, HttpStatus.OK);
//    }

    @GetMapping("/booksByStaff")
    public ResponseEntity<List<Integer>> getBooksByStaffId(@RequestParam("staffID") Integer staffID) {
        List<Integer> bookIds = operationService.getBookIdsByStaffId(staffID);
        return new ResponseEntity<>(bookIds, HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<Operation>> getAllOperations() {
        List<Operation> operations = operationService.getAllOperations();
        return new ResponseEntity<>(operations, HttpStatus.OK);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Operation> getOperationById(@PathVariable int id) {
//        Operation operation = operationService.getOperationById(id);
//        return new ResponseEntity<>(operation, HttpStatus.OK);
//    }

    @PostMapping
    public ResponseEntity<Operation> saveOperation(@RequestBody Operation operation) {
        Operation savedOperation = operationService.saveOperation(operation);
        return new ResponseEntity<>(savedOperation, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Operation> updateOperation(@PathVariable int id, @RequestBody Operation operationDetails) {
        Optional<Operation> operation = operationService.findById(id);
        if (operation.isPresent()) {
            operationDetails.setOperationID(id);
            return ResponseEntity.ok(operationService.saveOperation(operationDetails));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOperation(@PathVariable int id) {
        operationService.deleteOperation(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Other methods as needed
}