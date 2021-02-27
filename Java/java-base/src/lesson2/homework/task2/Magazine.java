package lesson2.homework.task2;

public class Magazine extends Book{
    private String name;

    public Magazine() {
    }

    public Magazine(String size, String color, int sheatsCount, String producer, String name) {
        super(size, color, sheatsCount, producer);
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Magazine{" +
                "name='" + name + '\'' +
                "} " + super.toString();
    }
}
