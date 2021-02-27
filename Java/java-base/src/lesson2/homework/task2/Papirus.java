package lesson2.homework.task2;

public class Papirus {
    private String size;
    private String color;

    public Papirus() {
    }

    public Papirus(String size, String color) {
        this.size = size;
        this.color = color;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "Papirus{" +
                "size='" + size + '\'' +
                ", color='" + color + '\'' +
                '}';
    }
}
