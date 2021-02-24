import java.util.Arrays;

public class Car {
    private String model;
    private String producer;
    private int power;
    private String[] owners;

    public Car() {
    }

    public Car(String model, String producer, int power, String[] owners) {
        this.model = model;
        this.producer = producer;
        this.power = power;
        this.owners = owners;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public void setPower(int power) {
        this.power = power;
    }


    public void setOwners(String[] owners) {
        this.owners = owners;
    }

    public String getModel() {
        return this.model;
    }

    public String getProducer() {
        return this.producer;
    }

    public int getPower() {
        return this.power;
    }

    public String[] getOwners() {
        return owners;
    }

    @Override
    public String toString() {
        return "Car{" +
                "model='" + model + '\'' +
                ", producer='" + producer + '\'' +
                ", power=" + power +
                ", owners=" + Arrays.toString(owners) +
                '}';
    }
}
