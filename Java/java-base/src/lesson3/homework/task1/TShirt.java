package lesson3.homework.task1;

public class TShirt extends Clothes implements MensClothes, WomensClothes {

    public TShirt() {
    }

    public TShirt(ClothingSize clothingSize, int price, String color) {
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
        return "TShirt{} " + super.toString();
    }
}
