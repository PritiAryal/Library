package com.example.Library.Service;

import com.example.Library.Domain.Operation;
import com.example.Library.Repository.OperationRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    @Transactional
    public Operation getOperationById(int id) {
        return operationRepository.findById(id);//.orElse(null);
    }

    @Transactional
    public Optional<Operation> findById(Integer id) {
        return operationRepository.findById(id);
    }

    //@Override
    @Transactional
    public Operation saveOperation(Operation operation) {
        return operationRepository.save(operation);
    }

    //@Override
    @Transactional
    public void deleteOperation(int id) {
        operationRepository.deleteById(id);
    }

    // Other method implementations
}

