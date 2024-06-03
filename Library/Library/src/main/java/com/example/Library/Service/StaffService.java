package com.example.Library.Service;


import com.example.Library.Domain.*;
import com.example.Library.Exception.ResourceNotFoundException;
import com.example.Library.Repository.AuthorRepository;
import com.example.Library.Repository.StaffRepository;
import com.example.Library.Repository.CategoryRepository;
import com.example.Library.Repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class StaffService {

    private final StaffRepository staffRepository;
    private final AuthorRepository authorRepository;
    private final CategoryRepository categoryRepository;

    private final LoanRepository loanRepository;

    @Autowired
    public StaffService(StaffRepository staffRepository, AuthorRepository authorRepository, CategoryRepository categoryRepository, LoanRepository loanRepository) {
        this.staffRepository = staffRepository;
        this.authorRepository = authorRepository;
        this.categoryRepository = categoryRepository;
        this.loanRepository = loanRepository;
    }

    @Transactional
    public List<Staff> getAllStaffs() {
        return staffRepository.findAll();
    }

    @Transactional
    public Staff getStaffById(int id) {
        return staffRepository.findById(id);
    }

    @Transactional
    public Optional<Staff> findById(Integer id) {
        return staffRepository.findById(id);
    }


    @jakarta.transaction.Transactional
    public Staff saveStaff(Staff staff) {
        return staffRepository.save(staff);
    }


    @Transactional
    public void deleteStaff(int id) {
        staffRepository.deleteById(id);
    }
}

