package com.example.Library.Controller;

import com.example.Library.Domain.Login;
import com.example.Library.Domain.Member;
import com.example.Library.Repository.MemberRepository;
import com.example.Library.Service.MemberService;
import com.example.Library.Service.SecurityService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//@RestController
@RequiredArgsConstructor
@CrossOrigin
@Controller
@RequestMapping("/api/member")
public class MemberController {

    //@Autowired
    private final MemberService memberService;
    private final SecurityService securityService;

    //@Autowired
    //private MemberRepository memberRepository;

    @GetMapping
    public ResponseEntity<List<Member>> getAllMembers() {
        List<Member> members = memberService.getAllMembers();
        return new ResponseEntity<>(members, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Member> getMemberById(@PathVariable int id) {
        Member member = memberService.getMemberById(id);
        return new ResponseEntity<>(member, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Member> saveMember(@RequestBody Member member) {
        Member savedMember = memberService.saveMember(member);
        return new ResponseEntity<>(savedMember, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Member> updateMember(@PathVariable Integer id, @RequestBody Member memberDetails) {
        Optional<Member> member = memberService.findById(id);
        if (member.isPresent()) {
            memberDetails.setMemberID(id);
            return ResponseEntity.ok(memberService.saveMember(memberDetails));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable int id) {
        memberService.deleteMember(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/login")
    @CrossOrigin
    public ResponseEntity<Map<String, Object>> validateMemberLogin(@RequestBody Login login) {
        String token = securityService.createToken(login.getName(), (1 * 10000 * 10));
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("token", token);

        if (memberService.validateMemberLogin(login)) {
            return ResponseEntity.status(200).body(map);
        }
        return ResponseEntity.status(400).body(null);
    }

    @PostMapping("/loggedInMember")
    @CrossOrigin
    public ResponseEntity<?> loggedInMember(@RequestHeader("Authorization") String tokenHeader) {
        if (tokenHeader != null && tokenHeader.startsWith("Bearer ")) {
            String token = tokenHeader.substring(7);
            System.out.println("Received token: " + token);

            String memberId = securityService.getMemberIdFromToken(token);
            if (memberId != null) {
                System.out.println("Extracted staff ID: " + memberId);

                Map<String, String> response = new HashMap<>();
                response.put("message", "Member ID extracted from token");
                response.put("memberID", memberId);
                return ResponseEntity.ok(response);
            } else {
                System.out.println("Error extracting member ID from token");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error extracting member ID from token");
            }
        } else {
            System.out.println("Invalid or missing token");
            return ResponseEntity.badRequest().body("Invalid or missing token");
        }
    }

    // Other methods as needed
}



