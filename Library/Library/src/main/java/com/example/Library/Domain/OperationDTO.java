package com.example.Library.Domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OperationDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer operationID;
    private Integer bookID;
    private Integer staffID;
    private Date performedDate;
    private String operationType;
}
