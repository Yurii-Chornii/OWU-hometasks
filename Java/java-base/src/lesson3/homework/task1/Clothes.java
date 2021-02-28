package lesson3.homework.task1;

public abstract class Clothes {
    private ClothingSize clothingSize;
    private int price;
    private String color;

    public Clothes() {
    }

    public Clothes(ClothingSize clothingSize, int price, String color) {
        this.clothingSize = clothingSize;
        this.price = price;
        this.color = color;
    }

    public ClothingSize getClothingSize() {
        return clothingSize;
    }

    public void setClothingSize(ClothingSize clothingSize) {
        this.clothingSize = clothingSize;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "Clothes{" +
                "clothingSize=" + clothingSize +
                ", price=" + price +
                ", color='" + color + '\'' +
                '}';
    }
}
