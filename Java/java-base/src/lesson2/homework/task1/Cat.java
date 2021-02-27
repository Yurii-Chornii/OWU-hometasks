package lesson2.homework.task1;

public class Cat extends Animal {
    private String type;
    private int weight;

    public Cat() {
    }

    public Cat(String name, String color, String type, int weight) {
        super(name, color);
        this.type = type;
        this.weight = weight;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    @Override
    public String toString() {
        return "Cat{" +
                "type='" + type + '\'' +
                ", weight=" + weight +
                "} " + super.toString();
    }
}
