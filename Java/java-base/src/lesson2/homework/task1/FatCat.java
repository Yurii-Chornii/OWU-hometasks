package lesson2.homework.task1;

public class FatCat extends Cat{
    private boolean isLazy;

    public FatCat() {
    }

    public FatCat(String name, String color, String type, int weight, boolean isLazy) {
        super(name, color, type, weight);
        this.isLazy = isLazy;
    }

    public boolean isLazy() {
        return isLazy;
    }

    public void setLazy(boolean lazy) {
        isLazy = lazy;
    }

    @Override
    public String toString() {
        return "FatCat{" +
                "isLazy=" + isLazy +
                "} " + super.toString();
    }
}
