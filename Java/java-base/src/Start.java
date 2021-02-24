public class Start {

    public static void main(String[] args) {
//        System.out.println("Hello Java");

        User user = new User(10, "Yura");
        System.out.println(user.id + " " + user.name);

        User user2 = new User();
        System.out.println(user2.id + " " + user2.name);


    }
}
