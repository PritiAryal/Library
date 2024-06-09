package com.example.Library.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import javax.persistence.*;
import jakarta.persistence.*;

import java.util.*;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer staffID;
    private String staffName;

    @Column(unique = true, nullable = false)
    private String staffUserName;
    private String staffEmail;
    private String password;
    private Integer staffPhone;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "staff", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Operation> operations = new HashSet<>();
   // private List<Operation> operations = new ArrayList<>();
}