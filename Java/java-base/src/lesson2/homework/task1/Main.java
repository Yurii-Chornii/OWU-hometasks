package lesson2.homework.task1;

public class Main {
    public static void main(String[] args) {

        Animal animal = new Animal("ckupakabra", "black");

        Dog dog = new Dog("Barsik", "brown", "buldog", 20);
        Cat cat = new Cat("Murka", "white", "simple", 6);

        BigDog bigDog = new BigDog("Rex", "brown", "vivcharka", 35, true);
        SmallDog smallDog = new SmallDog("Yami", "gray", "spic", 8, false);

        FatCat fatCat = new FatCat("may", "mixed", "simple", 12, true);
        SlimCat slimCat = new SlimCat("kit kit", "white", "not simple", 5, true, true);

        Animal[] animals = new Animal[7];
        animals[0] = animal;
        animals[1] = dog;
        animals[2] = cat;
        animals[3] = bigDog;
        animals[4] = smallDog;
        animals[5] = fatCat;
        animals[6] = slimCat;

        Dog[] dogs = new Dog[3];
        dogs[0] = dog;
        dogs[1] = bigDog;
        dogs[2] = smallDog;

        Cat[] cats = new Cat[3];
        cats[0] = cat;
        cats[1] = fatCat;
        cats[2] = slimCat;



    }
}
