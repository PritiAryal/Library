package com.example.Library.Repository;

import com.example.Library.Domain.Book;
import com.example.Library.Domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {
//    List<Member> findAll();
//
//    // Method to retrieve a book by its ID
//    Member findById(int id);
//
//    // Method to save a book
//    Member save(Member member);
//
//    // Method to delete a book by its ID
//    void deleteById(int id);
Optional<Member> findByUserName(String userName);
}