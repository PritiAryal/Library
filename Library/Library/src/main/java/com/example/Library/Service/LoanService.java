package com.example.Library.Service;

import com.example.Library.Domain.Book;
import com.example.Library.Domain.Loan;
import com.example.Library.Domain.Member;
import com.example.Library.Repository.BookRepository;
import com.example.Library.Repository.LoanRepository;
import com.example.Library.Repository.MemberRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class LoanService { //implements LoanService0 {

    //@Autowired
    private final LoanRepository loanRepository;
    private final BookRepository bookRepository;
    private final MemberRepository memberRepository;

//    @Transactional
//    public List<Loan> getAllLoans() {
//        return loanRepository.findAll();
//    }
//
//    @Transactional
//    public Loan getLoanById(int id) {
//        return loanRepository.findById(id).orElse(null);
//    }
//
//    @Transactional
//    public Optional<Loan> findById(Integer id) {
//        return loanRepository.findById(id);
//    }
//
//    @Transactional
//    public Loan saveLoan(Integer bookID, Integer memberID, Loan loan) {
//        Optional<Book> bookOptional = bookRepository.findById(bookID);
//        Optional<Member> memberOptional = memberRepository.findById(memberID);
//
//        if (bookOptional.isPresent() && memberOptional.isPresent()) {
//            loan.setBook(bookOptional.get());
//            loan.setMember(memberOptional.get());
//            return loanRepository.save(loan);
//        } else {
//            throw new IllegalArgumentException("Invalid bookID or memberID");
//        }
//    }
//
//    @Transactional
//    public void deleteLoan(int id) {
//        loanRepository.deleteById(id);
//    }



    @Transactional
    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

//    @Transactional
//    public List<Loan> getAllLoansWithBookAndMember() {
//        return loanRepository.findAllWithBookAndMember();
//    }

    @Transactional
    public List<Object[]> findAllWithBookTitleAndMemberNameByMemberIDAndBookID(Integer memberID, Integer bookID) {
        return loanRepository.findAllWithBookTitleAndMemberNameByMemberIDAndBookID(memberID, bookID);
    }

    @Transactional
    public Loan getLoanById(int id) {
        return loanRepository.findById(id).orElse(null);
    }

//    @Transactional
//    public Loan saveLoan(Integer bookID, Integer memberID, Loan loan) {
//        Optional<Book> book = bookRepository.findById(bookID);
//        Optional<Member> member = memberRepository.findById(memberID);
//
//        if (book.isPresent() && member.isPresent()) {
//            loan.setBook(book.get());
//            loan.setMember(member.get());
//            if (loan.getStatus() == null) {
//                loan.setStatus("not returned");
//                loan.setReturnDate(new Date(0)); // Set default return date
//            }
//            return loanRepository.save(loan);
//        } else {
//            throw new IllegalArgumentException("Invalid bookID or memberID");
//        }
//    }
public Loan saveLoan(Integer bookID, Integer memberID, Loan loan) {
    Optional<Book> book = bookRepository.findById(bookID);
    Optional<Member> member = memberRepository.findById(memberID);

    if (book.isPresent() && member.isPresent()) {
        loan.setBook(book.get());
        loan.setMember(member.get());

        // Check if return date is provided
        if (loan.getReturnDate() != null) {
            loan.setStatus("returned");
        } else {
            loan.setStatus("not returned");
            loan.setReturnDate(new Date(0)); // Set default return date
        }

        return loanRepository.save(loan);
    } else {
        throw new IllegalArgumentException("Invalid bookID or memberID");
    }
}


    @Transactional
    public void deleteLoan(int id) {
        loanRepository.deleteById(id);
    }

    @Transactional
    public Loan updateLoanStatus(int id, String status) {
        Loan loan = loanRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid loan ID"));
        loan.setStatus(status);
        return loanRepository.save(loan);
    }
//    @Transactional
//    public Loan updateLoan(int id, Loan loanUpdates) {
//        Loan loan = loanRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid loan ID"));
//
//        if (loanUpdates.getStatus() != null) {
//            loan.setStatus(loanUpdates.getStatus());
//            if ("returned".equalsIgnoreCase(loanUpdates.getStatus())) {
//                loan.setReturnDate(new Date());
//            } else {
//                loan.setReturnDate(new Date(0)); // Set to zero date if not returned
//            }
//        }
//        if (loanUpdates.getBook() != null) {
//            loan.setBook(loanUpdates.getBook());
//        }
//        if (loanUpdates.getMember() != null) {
//            loan.setMember(loanUpdates.getMember());
//        }
//        if (loanUpdates.getLoanDate() != null) {
//            loan.setLoanDate(loanUpdates.getLoanDate());
//        }
//        if (loanUpdates.getDueDate() != null) {
//            loan.setDueDate(loanUpdates.getDueDate());
//        }
//        if (loanUpdates.getReturnDate() != null) {
//            loan.setReturnDate(loanUpdates.getReturnDate());
//        }
//
//        // You can add more fields to update here if needed
//
//        return loanRepository.save(loan);
//    }
//    //@Override
//    @Transactional
//    public List<Loan> getAllLoans() {
//        return loanRepository.findAll();
//    }
//
//    //@Override
//    @Transactional
//    public Loan getLoanById(int id) {
//        return loanRepository.findById(id);//.orElse(null);
//    }
//
//    @Transactional
//    public Optional<Loan> findById(Integer id) {
//        return loanRepository.findById(id);
//    }
//
//    //@Override
//    @Transactional
//    public Loan saveLoan(Loan loan) {
//        return loanRepository.save(loan);
//    }
//
//    //@Override
//    @Transactional
//    public void deleteLoan(int id) {
//        loanRepository.deleteById(id);
//    }

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
