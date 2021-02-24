import java.util.Arrays;

public class User {
    private int id;
    private String name;
    private String[] skills;
    private Wallet wallet;

    public void setId(int id) {
        if (id < 0) {
            System.out.println("Id less than zero!");
        } else {
            this.id = id;
        }
    }
    public int getId(){
        return this.id;
    }

    public User(int id, String name, String[] skills) {
        this.id = id;
        this.name = name;
        this.skills = skills;
    }
    public User(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public User() {
    }

    public User(int id, String name, String[] skills, Wallet wallet) {
        this.id = id;
        this.name = name;
        this.skills = skills;
        this.wallet = wallet;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSkills(String[] skills) {
        this.skills = skills;
    }

    public void setWallet(Wallet wallet) {
        this.wallet = wallet;
    }

    public String getName() {
        return name;
    }

    public String[] getSkills() {
        return skills;
    }

    public Wallet getWallet() {
        return wallet;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", skills=" + Arrays.toString(skills) +
                ", wallet=" + wallet +
                '}';
    }
}
