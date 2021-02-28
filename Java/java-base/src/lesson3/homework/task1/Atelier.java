package lesson3.homework.task1;

import java.util.ArrayList;

public class Atelier {
    private ArrayList<Clothes> clothes = new ArrayList<>();


    public Atelier() {
    }

    public Atelier(ArrayList<Clothes> clothes) {
        this.clothes = clothes;
    }

    public ArrayList<Clothes> getClothes() {
        return clothes;
    }

    public void setClothes(ArrayList<Clothes> clothes) {
        this.clothes = clothes;
    }

    public ArrayList menChoise(){
        ArrayList<Clothes> menClothesChoise = new ArrayList<>();
        for (Clothes item : clothes) {
            if(item instanceof MensClothes){
                menClothesChoise.add(item);
            }
        }
        return menClothesChoise;
    }
    public ArrayList womenChoise(){
        ArrayList<Clothes> womenClothesChoise = new ArrayList<>();
        for (Clothes item : clothes) {
            if(item instanceof WomensClothes){
                womenClothesChoise.add(item);
            }
        }
        return womenClothesChoise;
    }

    @Override
    public String toString() {
        return "Atelier{" +
                "clothes=" + clothes +
                '}';
    }
}
