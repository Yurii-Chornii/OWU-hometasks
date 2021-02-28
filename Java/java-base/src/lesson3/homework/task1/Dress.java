package lesson3.homework.task1;

public class Dress extends Clothes implements WomensClothes {
    public Dress() {
    }

    public Dress(ClothingSize clothingSize, int price, String color) {
        super(clothingSize, price, color);
    }

    @Override
    public void dressAWoman() {

    }

    @Override
    public String toString() {
        return "Dress{} " + super.toString();
    }
}
