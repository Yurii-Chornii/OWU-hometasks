package lesson3.homework.task1;

public class Tie extends Clothes implements MensClothes{

    public Tie() {
    }

    public Tie(ClothingSize clothingSize, int price, String color) {
        super(clothingSize, price, color);
    }

    @Override
    public void dressAMan() {

    }

    @Override
    public String toString() {
        return "Tie{} " + super.toString();
    }
}
