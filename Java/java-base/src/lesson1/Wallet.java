package lesson1;

public class Wallet {
    private String type;
    private int sum;

    public Wallet(String type, int sum) {
        this.type = type;
        this.sum = sum;
    }

    public Wallet() {
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setSum(int sum) {
        this.sum = sum;
    }

    public String getType() {
        return type;
    }

    public int getSum() {
        return sum;
    }

    @Override
    public String toString() {
        return "lesson1.Wallet{" +
                "type='" + type + '\'' +
                ", sum=" + sum +
                '}';
    }
}
