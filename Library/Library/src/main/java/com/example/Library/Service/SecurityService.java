package com.example.Library.Service;


import com.example.Library.Domain.Member;
import com.example.Library.Exception.ResourceNotFoundException;
import com.example.Library.Repository.MemberRepository;
import com.example.Library.Repository.StaffRepository;
import com.example.Library.Domain.Staff;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class SecurityService {

    private static final String SECRET_KEY = "secretkeadfayyeytereadfadfadadkjaldjalflajdces";

    // @Autowired
    private final StaffRepository staffRepository;

    private final MemberRepository memberRepository;

    // @Transactional
    private byte[] getSecretKeyBytes() {
        return DatatypeConverter.parseBase64Binary(SECRET_KEY);
    }

    @Transactional
    public String createToken(String subject, long expTime) {
        if (expTime <= 0) {
            throw new RuntimeException("expired");
        }

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        byte[] secretKeyBytes = DatatypeConverter.parseBase64Binary(SECRET_KEY);
        Key signingKey = new SecretKeySpec(secretKeyBytes, signatureAlgorithm.getJcaName());

        return Jwts.builder()
                .setSubject(subject)
                //.claim("applicationuserId", id)
                .signWith(signingKey, signatureAlgorithm)
                .setExpiration(new Date(System.currentTimeMillis() + expTime))
                .compact();
    }

    @Transactional
    public String getSubject(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(DatatypeConverter.parseBase64Binary(SECRET_KEY))
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    @Transactional
    public String getStaffIdFromToken(String token) {
        byte[] secretKeyBytes = getSecretKeyBytes();
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(secretKeyBytes)
                .build()
                .parseClaimsJws(token)
                .getBody();


        String name = claims.getSubject(); // Assuming the name is stored as the subject in the token

        // Fetch the ID from the database using the name
        Optional<Staff> staff = staffRepository.findByStaffUserName(name);
        if (staff.isPresent()) {
            Staff user = staff.get();
            Integer userId = user.getStaffID();
            //return "User ID: " + userId;
            return String.valueOf(userId);
        } else {
//            return "User ID not found for the given name";
            return null; // Return null if staff not found
        }
    }

    @Transactional
    public String getMemberIdFromToken(String token) {
        byte[] secretKeyBytes = getSecretKeyBytes();
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(secretKeyBytes)
                .build()
                .parseClaimsJws(token)
                .getBody();

        String userName = claims.getSubject(); // Assuming the userName is stored as the subject in the token
        Optional<Member> member = memberRepository.findByUserName(userName);
        if (member.isPresent()) {
            return String.valueOf(member.get().getMemberID());
        }
        return null; // Return null if member not found
    }
}

//    @Transactional
//    public Map<String, Object> getStaffInfoFromToken(String token) {
//        byte[] secretKeyBytes = getSecretKeyBytes();
//        Claims claims = Jwts.parserBuilder()
//                .setSigningKey(secretKeyBytes)
//                .build()
//                .parseClaimsJws(token)
//                .getBody();
//
//        String name = claims.getSubject(); // Assuming the name is stored as the subject in the token
//
//        // Fetch the staff from the database using the name
//        Optional<Staff> staff = staffRepository.findByStaffUserName(name);
//        Map<String, Object> staffInfo = new HashMap<>();
//        if (staff.isPresent()) {
//            Staff user = staff.get();
//            staffInfo.put("staffID", user.getStaffID());
//            staffInfo.put("staffName", user.getStaffName());
//            return staffInfo;
//        } else {
//            throw new ResourceNotFoundException("Staff not found for the given name: " + name);
//        }
//    }



