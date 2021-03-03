package lesson4;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<User> users = new LinkedList<>();

        users.add(new User(1, "Yura"));
        users.add(new User(2, "Igor"));
        users.add(new User(3, "Ira"));
        users.add(new User(4, "Petya"));

        System.out.println(users);

    }
}
