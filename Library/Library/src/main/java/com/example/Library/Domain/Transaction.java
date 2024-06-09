package com.example.Library.Domain;



        //import javax.persistence.*;
        import java.util.Date;

        import com.fasterxml.jackson.annotation.JsonIgnore;
        import lombok.AllArgsConstructor;
        import lombok.Data;
        import lombok.NoArgsConstructor;

        import jakarta.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transaction{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer transactionID;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loanID", referencedColumnName = "loanID")
    private Loan loan;

    private Date transactionDate;
    private String type;

//    public Transaction(Loan loan, Date transactionDate, String type) {
//        this.loan = loan;
//        this.transactionDate = transactionDate;
//        this.type = type;
//    }
//
//    // Getters and Setters
//    public int getTransactionID() {
//        return transactionID;
//    }
//
//    public void setTransactionID(int transactionID) {
//        this.transactionID = transactionID;
//    }
//
//    public Loan getLoan() {
//        return loan;
//    }
//
//    public void setLoan(Loan loan) {
//        this.loan = loan;
//    }
//
//    public Date getTransactionDate() {
//        return transactionDate;
//    }
//
//    public void setTransactionDate(Date transactionDate) {
//        this.transactionDate = transactionDate;
//    }
//
//    public String getType() {
//        return type;
//    }
//
//    public void setType(String type) {
//        this.type = type;
//    }
}

