package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import com.example.Library.Domain.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OperationRepository extends JpaRepository<Operation, Integer> {
//    List<Operation> findAll();
//
//    Operation findById(int id);
//
//    Operation save(Operation operation);
//
//    void deleteById(int id);
// Find all operations performed by a specific staff member
    @Query("SELECT o FROM Operation o WHERE o.staff.staffID = :staffID")
    List<Operation> findByStaffId(Integer staffID);

    // Find all operations on a specific book
    @Query("SELECT o FROM Operation o WHERE o.book.bookID = :bookID")
    List<Operation> findByBookId(Integer bookID);

    // Find all operations of a specific type (create, update, delete)
    @Query("SELECT o FROM Operation o WHERE o.operationType = :operationType")
    List<Operation> findByOperationType(String operationType);

    @Query("SELECT o FROM Operation o WHERE o.staff.staffID = :staffID AND o.book.bookID = :bookID")
    List<Operation> findByStaffIDAndBookID(@Param("staffID") Integer staffID, @Param("bookID") Integer bookID);

    @Query("SELECT o.book.bookID FROM Operation o WHERE o.staff.staffID = :staffID")
    List<Integer> findBookIdsByStaffId(Integer staffID);
}
