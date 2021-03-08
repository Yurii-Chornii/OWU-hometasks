package com.example.lesson6.controllers;


import com.example.lesson6.dao.UserDao;
import com.example.lesson6.models.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;

@Controller
@AllArgsConstructor
public class MainController {
    private UserDao userDao;

    @GetMapping("/hello")
    public String hello(Model model){
        model.addAttribute("x", "Hello world!");
        return "hello.html";
    }
    @GetMapping("/")
    public String home(){
        return "index.html";
    }

    @PostMapping("/save")
    public String save(@RequestParam Map<String, String> map){
        System.out.println(map);

        Set<Map.Entry<String, String>> entries = map.entrySet();
        Iterator<Map.Entry<String, String>> iterator = entries.iterator();
        while(iterator.hasNext()){
            Map.Entry<String, String> next = iterator.next();
            System.out.println(next.getKey());
            System.out.println(next.getValue());

            //якщо треба щось видалити то
            iterator.remove();
        }


        return "index.html";
    }
    @GetMapping("/save")
    public String saveGet(@RequestParam("username") String name, Model model){
        userDao.save(new User(name));
        model.addAttribute("users", userDao.findAll());
        return "users.html";
    }

    @GetMapping("/users/{id}")
    public String getUser (@PathVariable("id") int userId, Model model){
        User one = userDao.getOne(userId);
        model.addAttribute("user", one);

        return "user.html";
    }

}
