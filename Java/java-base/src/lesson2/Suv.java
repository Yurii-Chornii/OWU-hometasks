package lesson2;

public class Suv extends Offroad{
    private int forvardDrive;
    private int backDrive;

    public Suv() {
    }

    public Suv(int id, String model, int power, int forvardDrive, int backDrive) {
        super(id, model, power);
        this.forvardDrive = forvardDrive;
        this.backDrive = backDrive;
    }

    public int getForvardDrive() {
        return forvardDrive;
    }

    public void setForvardDrive(int forvardDrive) {
        this.forvardDrive = forvardDrive;
    }

    public int getBackDrive() {
        return backDrive;
    }

    public void setBackDrive(int backDrive) {
        this.backDrive = backDrive;
    }

    @Override
    public String toString() {
        return "Suv{" +
                "forvardDrive=" + forvardDrive +
                ", backDrive=" + backDrive +
                "} " + super.toString();
    }
}
