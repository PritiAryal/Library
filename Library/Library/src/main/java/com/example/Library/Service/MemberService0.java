package com.example.Library.Service;

import com.example.Library.Domain.Member;

import java.util.List;

public interface MemberService0 {
    List<Member> getAllMembers();
    Member getMemberById(int id);
    Member saveMember(Member member);
    void deleteMember(int id);
    // Other methods as needed
}
