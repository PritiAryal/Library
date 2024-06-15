package com.example.Library.Domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
    public class BookHistory {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;

        //private Integer bookID;

        private String title;
        private String publisher;
        private Integer yearPublished;

        private Date deletedDate;

//    @JsonIgnore
//        @ManyToOne
//        @JoinColumn(name = "bookId")
//        private Book originalBook;

        // Getters and setters...
    }
