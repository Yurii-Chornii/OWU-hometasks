package lesson2.homework.task2;

public class Main {
    public static void main(String[] args) {
        Magazine magazine = new Magazine("a4", "white", 80, "France", "Vogue");
        Komix komix = new Komix("a5", "multicolor", 30, "USA", "SpiderMan");

        System.out.println(magazine);
        System.out.println(komix);
    }
}
