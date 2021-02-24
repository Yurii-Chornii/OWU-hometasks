public class Start {

    public static void main(String[] args) {
//        System.out.println("Hello Java");
        String[] skills = new String[2];
        skills[0] = "Java";
        skills[1] = "JS";

        User user1 = new User(10, "Yura", skills);
        user1.setId(100);
        System.out.println(user1);
        System.out.println(user1.getId());

        Wallet wallet = new Wallet("leather", 10000);

        User userWithWallet = new User(3, "kokos", skills, wallet);
        System.out.println(userWithWallet);
    }
}
