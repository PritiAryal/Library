package com.example.Library.Controller;

import com.example.Library.Domain.Operation;
import com.example.Library.Service.OperationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/api")
public class DashboardController {

    private final OperationService operationService;

    @GetMapping("/staff/{staffID}/operations")
    public ResponseEntity<List<Operation>> getOperationsByStaffId(@PathVariable Integer staffID) {
        List<Operation> operations = operationService.getOperationsByStaffId(staffID);
        return new ResponseEntity<>(operations, HttpStatus.OK);
    }

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
