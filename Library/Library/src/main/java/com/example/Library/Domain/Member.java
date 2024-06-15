package com.example.Library.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import javax.persistence.*;
import jakarta.persistence.*;

import java.math.BigInteger;
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
    private String userName;
    private String address;
    private String email;
    private String password;
    private BigInteger phone;

//    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
//    private Set<Loan> loans;

   @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Loan> loans = new HashSet<>();
}



