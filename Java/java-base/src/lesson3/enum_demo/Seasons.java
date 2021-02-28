package lesson3.enum_demo;

public enum Seasons {
    SUMMER(91, "Lito"), AUTUMN(91, "Osin"), WINTER(91, "Zuma"), SPRING(91, "Vesna");

    int days;
    String alias;

    Seasons(int days, String alias) {
        this.days = days;
        this.alias = alias;
    }

    public int getDays() {
        return days;
    }

    public void setDays(int days) {
        this.days = days;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    @Override
    public String toString() {
        return "Seasons{" +
                "days=" + days +
                ", alias='" + alias + '\'' +
                "} " + super.toString();
    }
}
