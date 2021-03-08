package com.example.lesson6.dao;

import com.example.lesson6.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;

@Service
@EnableJpaRepositories
public interface UserDao extends JpaRepository<User, Integer> {
}
