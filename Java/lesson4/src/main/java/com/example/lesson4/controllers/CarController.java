package com.example.lesson4.controllers;

import com.example.lesson4.dao.CarDao;
import com.example.lesson4.models.Car;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class CarController {
    private CarDao carDao;

    @GetMapping("/saveCar")
    public void saveCar(@RequestParam String model){
        Car car = new Car(model);
        carDao.save(car);
    }

    @GetMapping("/getCars")
    public List<Car> getCars(){
        return carDao.findAll();
    }

}
