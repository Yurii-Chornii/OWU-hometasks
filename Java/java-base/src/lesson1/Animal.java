package lesson1;

public class Animal {
    private String kind;
    private boolean isHomePet;
    private int height;
    private int weight;
    private Object owner;

    public Animal(String kind, boolean isHomePet, int height, int weight, Object owner) {
        this.kind = kind;
        this.isHomePet = isHomePet;
        this.height = height;
        this.weight = weight;
        this.owner = owner;
    }
    public Animal(String kind, boolean isHomePet, int height, int weight, int ownerId, String ownerName) {
        this.kind = kind;
        this.isHomePet = isHomePet;
        this.height = height;
        this.weight = weight;
        this.owner = new User(ownerId, ownerName);
    }

    public Animal() {
    }

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

    public boolean isHomePet() {
        return isHomePet;
    }

    public void setHomePet(boolean homePet) {
        isHomePet = homePet;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public Object getOwner() {
        return owner;
    }

    public void setOwner(Object owner) {
        this.owner = owner;
    }

    @Override
    public String toString() {
        return "lesson1.Animal{" +
                "kind='" + kind + '\'' +
                ", isHomePet=" + isHomePet +
                ", height=" + height +
                ", weight=" + weight +
                ", owner=" + owner +
                '}';
    }
}
