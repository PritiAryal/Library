package com.example.Library.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Operation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer operationID;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "bookID", referencedColumnName = "bookID", nullable=false)
    private Book book;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "staffID", referencedColumnName = "staffID", nullable=false)
    private Staff staff;


    private Date performedDate;

    //@Column(columnDefinition = "CHECK operationType IN ('Create', 'Delete', 'Update')")
    private String operationType;
}
