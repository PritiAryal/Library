package com.example.Library.Service;

import com.example.Library.Domain.Book;
import com.example.Library.Domain.Operation;
import com.example.Library.Repository.OperationRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class OperationService { //implements OperationService0 {

    //@Autowired
    private final OperationRepository operationRepository;

    //@Override
    @Transactional
    public List<Operation> getAllOperations() {
        return operationRepository.findAll();
    }

    //@Override
//    @Transactional
//    public Operation getOperationById(int id) {
//        return operationRepository.findById(id);//.orElse(null);
//    }

    @Transactional
    public Optional<Operation> findById(Integer id) {
        return operationRepository.findById(id);
    }

    //@Override
    @Transactional
    public Operation saveOperation(Operation operation) {
        return operationRepository.save(operation);
    }

@Transactional
    public List<Operation> getOperationsByStaffAndBook(Integer staffID, Integer bookID) {
        // Implement the logic to fetch operations based on staffID and bookID
        return operationRepository.findByStaffIDAndBookID(staffID, bookID);
    }

    @Transactional
    public List<Integer> getBookIdsByStaffId(Integer staffID) {
        return operationRepository.findBookIdsByStaffId(staffID);
    }


    //@Override
    @Transactional
    public void deleteOperation(int id) {
        operationRepository.deleteById(id);
    }


    @Transactional
    public List<Operation> getOperationsByStaffId(Integer staffID) {
        return operationRepository.findByStaffId(staffID);
    }

    @Transactional
    public List<Operation> getOperationsByBookId(Integer bookID) {
        return operationRepository.findByBookId(bookID);
    }

    @Transactional
    public List<Operation> getOperationsByType(String operationType) {
        return operationRepository.findByOperationType(operationType);
    }


    // Other method implementations
}

