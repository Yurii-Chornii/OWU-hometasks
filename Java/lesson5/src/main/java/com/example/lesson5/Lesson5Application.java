package com.example.lesson5;

import com.example.lesson5.models.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.*;

@SpringBootApplication
public class Lesson5Application {

    public static void main(String[] args) {
        SpringApplication.run(Lesson5Application.class, args);

        ArrayList<User> users = new ArrayList<>();
        users.add(new User(1, "kokos"));
        users.add(new User(2, "banan"));
        users.add(new User(2, "banan"));
        users.add(new User(3, "vasya"));
        users.add(new User(4, "sasha"));
        users.add(new User(4, "sasha"));
        users.add(new User(5, "igor"));
        users.add(new User(6, "yura"));

        //        ArrayList<User> users2 = new ArrayList<>();
//        users2.add(new User(10, "kokos"));
//        users2.add(new User(20, "banan"));
//        users2.add(new User(20, "banan"));
//        users2.add(new User(30, "vasya"));
//        users2.add(new User(40, "sasha"));
//        users2.add(new User(40, "sasha"));
//        users2.add(new User(50, "igor"));
//        users2.add(new User(60, "yura"));
//        users.addAll(users2);

        Iterator<User> iterator = users.iterator();

        while (iterator.hasNext()) {
            User next = iterator.next();
            if (next.getId() % 2 == 0) {
                iterator.remove();
            }
        }

        System.out.println(users);


        Map<String, Integer> map = new HashMap<>();

    }

}
