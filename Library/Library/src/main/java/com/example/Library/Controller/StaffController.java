package com.example.Library.Controller;

import com.example.Library.Domain.Login;
import com.example.Library.Domain.Staff;
import com.example.Library.Repository.StaffRepository;
import com.example.Library.Service.SecurityService;
import com.example.Library.Service.StaffService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//@RestController

@CrossOrigin
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/staff")
public class StaffController {

    //@Autowired
    private final StaffService staffService;

    // @Autowired
    private final SecurityService securityService;

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
    @PostMapping("/login")
    @CrossOrigin
    public ResponseEntity<Map<String, Object>> validateUserLogin(@RequestBody Login login) {
        System.out.println("Login Server TEST");
        System.out.println(login.getName());
        //System.out.println(login.getEmail());
        System.out.println(login.getPassword());


        String token = securityService.createToken(login.getName(), (1 * 10000 * 10));
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("token", token);

        System.out.println("validation" + staffService.validateStaffLogin(login));

        if (staffService.validateStaffLogin(login)) {
            return ResponseEntity.status(200).body(map);
        }
        return ResponseEntity.status(400).body(null);

    }


    @PostMapping("/loggedInStaff")
    @CrossOrigin
    public ResponseEntity<?> loggedInStaff(@RequestHeader("Authorization") String tokenHeader) {
        if (tokenHeader != null && tokenHeader.startsWith("Bearer ")) {
            String token = tokenHeader.substring(7);
            System.out.println("Received token: " + token);

            String staffId = securityService.getStaffIdFromToken(token);
            if (staffId != null) {
                System.out.println("Extracted staff ID: " + staffId);

                Map<String, String> response = new HashMap<>();
                response.put("message", "Staff ID extracted from token");
                response.put("staffID", staffId);
                return ResponseEntity.ok(response);
            } else {
                System.out.println("Error extracting staff ID from token");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error extracting staff ID from token");
            }
        } else {
            System.out.println("Invalid or missing token");
            return ResponseEntity.badRequest().body("Invalid or missing token");
        }
    }
}


//    @PostMapping("/loggedInStaff")
//    @CrossOrigin
//    public ResponseEntity<?> loggedInStaff(@RequestHeader("Authorization") String tokenHeader) {
//        if (tokenHeader != null && tokenHeader.startsWith("Bearer ")) {
//            String token = tokenHeader.substring(7);
//            System.out.println("Received token: " + token);
//
//            Map<String, Object> staffInfo = securityService.getStaffInfoFromToken(token);
//            if (staffInfo.containsKey("staffID")) {
//                String staffID = String.valueOf(staffInfo.get("staffID"));
//                System.out.println("Extracted staff ID: " + staffID);
//
//                String staffName = (String) staffInfo.get("staffName");
//
//                Map<String, String> response = new HashMap<>();
//                response.put("message", "Staff ID and name extracted from token");
//                response.put("staffID", staffID);
//                response.put("staffName", staffName);
//                return ResponseEntity.ok(response);
//            } else {
//                System.out.println("Error extracting staff ID from token");
//                return ResponseEntity.badRequest().body("Error extracting staff ID from token");
//            }
//        } else {
//            System.out.println("Invalid or missing token");
//            return ResponseEntity.badRequest().body("Invalid or missing token");
//        }
//    }


//}

//    @PostMapping("/loggedInStaff")
//    @CrossOrigin
//    public ResponseEntity<?> loggedInStaff(@RequestHeader("Authorization") String tokenHeader) {
//        if (tokenHeader != null && tokenHeader.startsWith("Bearer ")) {
//            String token = tokenHeader.substring(7);
//            System.out.println("Received token: " + token);
//
//            String userId = securityService.getStaffIdFromToken(token);
//            if (userId != null) {
//                System.out.println("Extracted staff ID: " + userId);
//                // Extracting the actual user ID from the string "User ID: 1"
//                String extractedUserId = userId.split(":")[1].trim(); // Assuming the ID comes after the colon and might have leading/trailing spaces
//
//                Map<String, String> response = new HashMap<>();
//                response.put("message", "Staff ID extracted from token");
//                response.put("staffID", extractedUserId);
//                return ResponseEntity.ok(response);
//            } else {
//                System.out.println("Error extracting staff ID from token");
//                return ResponseEntity.badRequest().body("Error extracting staff ID from token");
//            }
//        } else {
//            System.out.println("Invalid or missing token");
//            return ResponseEntity.badRequest().body("Invalid or missing token");
//        }
//    }


