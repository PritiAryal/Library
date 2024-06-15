// Book.java
package com.example.Library.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;
//import javax.persistence.*;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookID;
    private String title;
    private BigInteger ISBN;
    private String publisher;
    private Integer yearPublished;

    @Version
    private Long version;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "categoryID", referencedColumnName = "categoryID", nullable=false)
    //@NotNull
    private Category category;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "authorID", referencedColumnName = "authorID", nullable=false)
    //@NotNull
    private Author author;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Operation> operations = new HashSet<>();

    @Column(name = "deleted")
    private Boolean deleted=false;

//    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
//    private Set<Loan> loans;

@JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true) //fetch = FetchType.LAZY,
    private Set<Loan> loans = new HashSet<>();

}

