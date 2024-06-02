package com.example.Library.Service;

import com.example.Library.Domain.Loan;
import com.example.Library.Repository.LoanRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class LoanService { //implements LoanService0 {

    //@Autowired
    private final LoanRepository loanRepository;

    //@Override
    @Transactional
    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    //@Override
    @Transactional
    public Loan getLoanById(int id) {
        return loanRepository.findById(id);//.orElse(null);
    }

    @Transactional
    public Optional<Loan> findById(Integer id) {
        return loanRepository.findById(id);
    }

    //@Override
    @Transactional
    public Loan saveLoan(Loan loan) {
        return loanRepository.save(loan);
    }

    //@Override
    @Transactional
    public void deleteLoan(int id) {
        loanRepository.deleteById(id);
    }

    // Other method implementations
}


//package com.example.Library.Service;
//
//import com.example.Library.Domain.Loan;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import javax.sql.DataSource;
//import java.sql.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class LoanService implements LoanService0 {
//
//    @Autowired
//    private DataSource dataSource;
//
//    @Override
//    public List<Loan> getAllLoans() {
//        List<Loan> loans = new ArrayList<>();
//        try (Connection connection = dataSource.getConnection();
//             Statement statement = connection.createStatement();
//             ResultSet resultSet = statement.executeQuery("SELECT * FROM loans")) {
//            while (resultSet.next()) {
//                Loan loan = new Loan();
//                loan.setLoanID(resultSet.getInt("loanID"));
//                loan.setBookID(resultSet.getInt("bookID"));
//                loan.setMemberID(resultSet.getInt("memberID"));
//                loan.setLoanDate(resultSet.getDate("loanDate").toLocalDate());
//                loan.setDueDate(resultSet.getDate("dueDate").toLocalDate());
//                loan.setReturnDate(resultSet.getDate("returnDate") != null ? resultSet.getDate("returnDate").toLocalDate() : null);
//                loans.add(loan);
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        return loans;
//    }
//
//    @Override
//    public Loan getLoanById(int id) {
//        Loan loan = null;
//        try (Connection connection = dataSource.getConnection();
//             PreparedStatement statement = connection.prepareStatement("SELECT * FROM loans WHERE loanID = ?")) {
//            statement.setInt(1, id);
//            ResultSet resultSet = statement.executeQuery();
//            if (resultSet.next()) {
//                loan = new Loan();
//                loan.setLoanID(resultSet.getInt("loanID"));
//                loan.setBookID(resultSet.getInt("bookID"));
//                loan.setMemberID(resultSet.getInt("memberID"));
//                loan.setLoanDate(resultSet.getDate("loanDate").toLocalDate());
//                loan.setDueDate(resultSet.getDate("dueDate").toLocalDate());
//                loan.setReturnDate(resultSet.getDate("returnDate") != null ? resultSet.getDate("returnDate").toLocalDate() : null);
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        return loan;
//    }
//
//    @Override
//    public Loan saveLoan(Loan loan) {
//        try (Connection connection = dataSource.getConnection();
//             PreparedStatement statement = connection.prepareStatement("INSERT INTO loans (bookID, memberID, loanDate, dueDate, returnDate) VALUES (?, ?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS)) {
//            statement.setInt(1, loan.getBookID());
//            statement.setInt(2, loan.getMemberID());
//            statement.setDate(3, Date.valueOf(loan.getLoanDate()));
//            statement.setDate(4, Date.valueOf(loan.getDueDate()));
//            statement.setDate(5, loan.getReturnDate() != null ? Date.valueOf(loan.getReturnDate()) : null);
//            statement.executeUpdate();
//            ResultSet resultSet = statement.getGeneratedKeys();
//            if (resultSet.next()) {
//                loan.setLoanID(resultSet.getInt(1));
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        return loan;
//    }
//
//    @Override
//    public void deleteLoan(int id) {
//        try (Connection connection = dataSource.getConnection();
//             PreparedStatement statement = connection.prepareStatement("DELETE FROM loans WHERE loanID = ?")) {
//            statement.setInt(1, id);
//            statement.executeUpdate();
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//    }
//
//    // Other method implementations
//}
