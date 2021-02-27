package lesson2.homework.task2;

public class Komix extends Book{
    private String name;

    public Komix() {
    }

    public Komix(String size, String color, int sheatsCount, String producer, String name) {
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
        return "Komix{" +
                "name='" + name + '\'' +
                "} " + super.toString();
    }
}
