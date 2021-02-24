import java.util.Arrays;

public class Start {

    public static void main(String[] args) {
        // code from lesson
//        System.out.println("Hello Java");
        String[] skills = new String[2];
        skills[0] = "Java";
        skills[1] = "JS";
//
        User user1 = new User(1, "Yura", skills);
//        user1.setId(100);
//        System.out.println(user1);
//        System.out.println(user1.getId());
//
//        Wallet wallet = new Wallet("leather", 10000);
//
//        User userWithWallet = new User(3, "kokos", skills, wallet);
//        System.out.println(userWithWallet);

        //homework

        String[] owners = new String[1];
        owners[0] = "Yura";

        Car mers = new Car("s500", "mercedes", 460, owners);
        System.out.println(mers);

        Phone iPhone = new Phone("12 PRO MAX", "White", 4, 4);
        System.out.println(iPhone);

        Animal barsik = new Animal("dog", true, 50, 16, user1);
        System.out.println(barsik);

        Animal barsikWithNewOwner = new Animal("dog", true, 50, 16, 3, "Diana");
        System.out.println(barsikWithNewOwner);
    }
}
