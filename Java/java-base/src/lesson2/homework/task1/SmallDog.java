package lesson2.homework.task1;

public class SmallDog extends Dog{
    private boolean veryLittle;

    public SmallDog() {
    }

    public SmallDog(String name, String color, String type, int weight, boolean veryLittle) {
        super(name, color, type, weight);
        this.veryLittle = veryLittle;
    }

    public boolean isVeryLittle() {
        return veryLittle;
    }

    public void setVeryLittle(boolean veryLittle) {
        this.veryLittle = veryLittle;
    }

    @Override
    public String toString() {
        return "SmallDog{" +
                "veryLittle=" + veryLittle +
                "} " + super.toString();
    }
}
