package lesson3.homework.task2;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        User yura = new User(1, "Yura", 22, Gender.MALE);
        User petro = new User(2, "Petro", 21, Gender.MALE);
        User yulia = new User(3, "Yulia", 26, Gender.FEMALE);
        User vova = new User(4, "Vova", 32, Gender.MALE);
        User igor = new User(5, "Igor", 50, Gender.MALE);
        User natalia = new User(6, "Natalia", 24, Gender.FEMALE);
        User vasya = new User(7, "Vasya", 18, Gender.MALE);
        User olia = new User(8, "Olia", 19, Gender.FEMALE);
        User ostap = new User(9, "Ostap", 20, Gender.MALE);
        User oksana = new User(10, "Oksana", 38, Gender.FEMALE);

        ArrayList<User> users = new ArrayList<>();

        users.add(yura);
        users.add(petro);
        users.add(yulia);
        users.add(vova);
        users.add(igor);
        users.add(natalia);
        users.add(vasya);
        users.add(olia);
        users.add(ostap);
        users.add(oksana);

        //- Проітерувати колекцію юзерів, вивевши тільки юзерів з парним значенням ід
        for (User user : users) {
            if (user.getId() % 2 == 0){
                System.out.println(user);
            }
        }

        //- Проітерувати колекцію юзерів, вивевши тільки юзерів з ім'ям , довжина якого більше ніж 5 символів
        users.forEach(user -> {
            if (user.getName().length() > 5){
                System.out.println(user);
            }
        });

        // Проітерувати колекцію юзерів, вивевши тільки юзерів жінок
        users.forEach(user -> {
            if (user.getGender() == Gender.FEMALE){
                System.out.println(user);
            }
        });
    }
}
