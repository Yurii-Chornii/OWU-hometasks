package lesson3.enum_demo;

public class Main {
    public static void main(String[] args) {
        User user = new User("Yura", Seasons.AUTUMN);

    }
}

class User {
    private String name;
    private Seasons birthSeason;

    public User(String name, Seasons birthSeason) {
        this.name = name;
        this.birthSeason = birthSeason;
    }
}