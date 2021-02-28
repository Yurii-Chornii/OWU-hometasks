package lesson3.homework.task1;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Clothes> clothes = new ArrayList<>();
        clothes.add(new Dress());
        clothes.add(new TShirt());
        clothes.add(new Pants());
        clothes.add(new Tie());

        Atelier atelier = new Atelier(clothes);
        System.out.println(atelier.menChoise());
        System.out.println(atelier.womenChoise());
    }
}
