package com.example.lesson4.controllers;


import com.example.lesson4.dao.UserDao;
import com.example.lesson4.models.User;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@AllArgsConstructor
public class MainController {

    private UserDao userDao;

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
    @GetMapping("/hi")
    public String hi(){
        return "hi";
    }

    @GetMapping("/user")
    public User getUser(){
        User user = new User();
        user.setId(1111);
        user.setName("Yura");
        return user;
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        List<User> usersList = userDao.findAll();
        return usersList;
    }

    @GetMapping("/saveUser")
    public void saveUser(@RequestParam String name){
        User user = new User(name);
        userDao.save(user);
    }

}
