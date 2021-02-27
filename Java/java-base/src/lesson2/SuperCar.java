package lesson2;

public class SuperCar extends Offroad {
    private boolean luxury = true;

    public SuperCar() {
    }

    public SuperCar(int id, String model, int power, boolean luxury) {
        super(id, model, power);
        this.luxury = luxury;
    }

    public boolean isLuxury() {
        return luxury;
    }

    public void setLuxury(boolean luxury) {
        this.luxury = luxury;
    }

    @Override
    public String toString() {
        return "SuperCar{" +
                "luxury=" + luxury +
                "} " + super.toString();
    }
}
