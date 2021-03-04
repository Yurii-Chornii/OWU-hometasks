package com.example.lesson4java.dao;

import com.example.lesson4java.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface UserDao extends JpaRepository<User, Integer> {

}
