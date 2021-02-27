package lesson2.interface_demo;

public class Main {
    public static void main(String[] args) {
        User user = new User();

        Runner[] runners = {user};

        user.doRun();
    }
}
