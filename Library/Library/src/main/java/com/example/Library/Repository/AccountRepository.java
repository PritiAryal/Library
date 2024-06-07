package com.example.Library.Repository;

import com.example.Library.Domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;
public interface AccountRepository extends JpaRepository<Account, String> {
}
