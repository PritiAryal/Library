package com.example.Library.Service;

import com.example.Library.Domain.Login;
import com.example.Library.Domain.Member;
import com.example.Library.Repository.MemberRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class MemberService { //implements MemberService0 {

    //@Autowired
    private final MemberRepository memberRepository;

    @Transactional
    public boolean validateMemberLogin(Login login) {
        Optional<Member> member = memberRepository.findByUserName(login.getName());
        if (!member.isPresent()) {
            return false;
        }
        return login.getPassword().equals(member.get().getPassword());
    }

    @Transactional
    public Optional<Member> findByUserName(String userName) {
        return memberRepository.findByUserName(userName);
    }

    //@Override
    @Transactional
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    //@Override
    @Transactional
    public Member getMemberById(int id) {
        return memberRepository.findById(id).orElse(null);
    }

    //@Override
    @Transactional
    public Member saveMember(Member member) {
        return memberRepository.save(member);
    }

    @Transactional
    public Optional<Member> findById(Integer id) {
        return memberRepository.findById(id);
    }

    //@Override
    @Transactional
    public void deleteMember(int id) {
        memberRepository.deleteById(id);
    }

    // Other method implementations
}