package com.example.Library.Domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import javax.persistence.*;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer memberID;
    private String name;
    private String address;
    private String email;
    private String phone;

//    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
//    private Set<Loan> loans;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Loan> loans = new HashSet<>();

//    public Member(String name, String address, String email, String phone) {
//        this.name = name;
//        this.address = address;
//        this.email = email;
//        this.phone = phone;
//    }

    // Getters and Setters
//    public int getMemberID() {
//        return memberID;
//    }
//
//    public void setMemberID(int memberID) {
//        this.memberID = memberID;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getAddress() {
//        return address;
//    }
//
//    public void setAddress(String address) {
//        this.address = address;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPhone() {
//        return phone;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public Set<Loan> getLoans() {
//        return loans;
//    }
//
//    public void setLoans(Set<Loan> loans) {
//        this.loans = loans;
//    }
}

