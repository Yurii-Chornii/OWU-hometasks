package lesson3.homework.task1;

public class Pants extends Clothes implements MensClothes, WomensClothes {


    public Pants() {
    }

    public Pants(ClothingSize clothingSize, int price, String color) {
        super(clothingSize, price, color);
    }

    @Override
    public void dressAMan() {

    }

    @Override
    public void dressAWoman() {

    }

    @Override
    public String toString() {
        return "Pants{} " + super.toString();
    }
}
