package lesson3.collections_demo;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        ArrayList <String> arrayList = new ArrayList<>();

        arrayList.add("Yura");
        arrayList.add("Petro");
        arrayList.get(0);
        arrayList.size();

        for (String s : arrayList) {
            System.out.println(s);
        }
    }
}
