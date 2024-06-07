package com.example.Library.Service;


import com.example.Library.Domain.*;
import com.example.Library.Exception.ResourceNotFoundException;
import com.example.Library.Repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class StaffService {

    private final StaffRepository staffRepository;
    private final AuthorRepository authorRepository;
    private final CategoryRepository categoryRepository;

    private final LoanRepository loanRepository;


    private final AccountRepository accountRepository;

    @Transactional
    public boolean validateStaffLogin(Login login) {
        Optional<Staff> staff = staffRepository.findByStaffUserName(login.getName());



        if (!staff.isPresent()) {
            return false;
        }


        System.out.println("login pass " + login.getPassword());
        System.out.println("database pass " + staff.get().getPassword());

        return login.getPassword().equals(staff.get().getPassword());
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

