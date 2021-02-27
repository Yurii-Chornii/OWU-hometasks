package lesson2.homework.task2;

public class Book extends Papirus {
    private int sheatsCount;
    private String producer;

    public Book() {
    }

    public Book(String size, String color, int sheatsCount, String producer) {
        super(size, color);
        this.sheatsCount = sheatsCount;
        this.producer = producer;
    }

    public int getSheatsCount() {
        return sheatsCount;
    }

    public void setSheatsCount(int sheatsCount) {
        this.sheatsCount = sheatsCount;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    @Override
    public String toString() {
        return "Book{" +
                "sheatsCount=" + sheatsCount +
                ", producer='" + producer + '\'' +
                "} " + super.toString();
    }
}
