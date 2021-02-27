package lesson1;

public class Phone {
    private String model;
    private String color;
    private int ram;
    private int core;

    public Phone() {
    }

    public Phone(String model, String color, int ram, int core) {
        this.model = model;
        this.color = color;
        this.ram = ram;
        this.core = core;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getRam() {
        return ram;
    }

    public void setRam(int ram) {
        this.ram = ram;
    }

    public int getCore() {
        return core;
    }

    public void setCore(int core) {
        this.core = core;
    }

    @Override
    public String toString() {
        return "lesson1.Phone{" +
                "model='" + model + '\'' +
                ", color='" + color + '\'' +
                ", ram=" + ram +
                ", core=" + core +
                '}';
    }
}
