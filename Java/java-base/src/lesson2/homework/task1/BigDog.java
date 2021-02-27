package lesson2.homework.task1;

public class BigDog extends Dog{
    private boolean strong;

    public BigDog() {
    }

    public BigDog(String name, String color, String type, int weight, boolean strong) {
        super(name, color, type, weight);
        this.strong = strong;
    }

    public boolean isStrong() {
        return strong;
    }

    public void setStrong(boolean strong) {
        this.strong = strong;
    }

    @Override
    public String toString() {
        return "BigDog{" +
                "strong=" + strong +
                "} " + super.toString();
    }
}
