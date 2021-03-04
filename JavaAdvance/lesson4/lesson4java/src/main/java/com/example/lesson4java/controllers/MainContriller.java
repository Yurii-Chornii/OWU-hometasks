package com.example.lesson4java.controllers;

import com.example.lesson4java.dao.UserDao;
import com.example.lesson4java.models.User;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class MainContriller {
    private UserDao userDao;

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }

    @GetMapping("/saveUser")
    public void saveUser(@RequestParam String name){
        User user = new User(name);
        userDao.save(user);
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        List<User> usersList = userDao.findAll();
        return usersList;
    }

}
