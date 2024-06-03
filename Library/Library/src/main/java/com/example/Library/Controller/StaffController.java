package com.example.Library.Controller;

import com.example.Library.Domain.Staff;
import com.example.Library.Repository.StaffRepository;
import com.example.Library.Service.StaffService;
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
@RequestMapping("/api/staffs")
public class StaffController {

    //@Autowired
    private final StaffService staffService;

    //@Autowired
    //private StaffRepository staffRepository;

    @GetMapping
    public ResponseEntity<List<Staff>> getAllStaffs() {
        List<Staff> staffs = staffService.getAllStaffs();
        return new ResponseEntity<>(staffs, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Staff> getStaffById(@PathVariable int id) {
        Staff staff = staffService.getStaffById(id);
        return new ResponseEntity<>(staff, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Staff> saveStaff(@RequestBody Staff staff) {
        Staff savedStaff = staffService.saveStaff(staff);
        return new ResponseEntity<>(savedStaff, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Staff> updateStaff(@PathVariable Integer id, @RequestBody Staff staffDetails) {
        Optional<Staff> staff = staffService.findById(id);
        if (staff.isPresent()) {
            staffDetails.setStaffID(id);
            return ResponseEntity.ok(staffService.saveStaff(staffDetails));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStaff(@PathVariable int id) {
        staffService.deleteStaff(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Other methods as needed
}



