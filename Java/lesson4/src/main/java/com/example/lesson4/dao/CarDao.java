package com.example.lesson4.dao;

import com.example.lesson4.models.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarDao extends JpaRepository<Car, Integer> {
}
