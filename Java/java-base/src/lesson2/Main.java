package lesson2;

public class Main {
    public static void main(String[] args) {

        Car car = new Car(1, "mazda");
        Offroad offroad = new Offroad(2, "subaru", 300);
        SuperCar superCar = new SuperCar(3, "urus", 400, true);
        Suv suv = new Suv(4, "ram4000", 300, 50, 50);

        Car[] cars = new Car[4];
        cars[0] = car;
        cars[1] = offroad;
        cars[2] = superCar;
        cars[3] = suv;
    }
}
