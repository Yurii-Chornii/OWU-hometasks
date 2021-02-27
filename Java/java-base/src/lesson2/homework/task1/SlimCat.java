package lesson2.homework.task1;

public class SlimCat extends Cat{
    private boolean mamuMav;
    private boolean aTataMav;

    public SlimCat() {
    }

    public SlimCat(String name, String color, String type, int weight, boolean mamuMav, boolean aTataMav) {
        super(name, color, type, weight);
        this.mamuMav = mamuMav;
        this.aTataMav = aTataMav;
    }

    public boolean isMamuMav() {
        return mamuMav;
    }

    public void setMamuMav(boolean mamuMav) {
        this.mamuMav = mamuMav;
    }

    public boolean isaTataMav() {
        return aTataMav;
    }

    public void setaTataMav(boolean aTataMav) {
        this.aTataMav = aTataMav;
    }

    @Override
    public String toString() {
        return "SlimCat{" +
                "mamuMav=" + mamuMav +
                ", aTataMav=" + aTataMav +
                "} " + super.toString();
    }
}
