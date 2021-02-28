package lesson3.homework.task2;

public enum Gender {
    MALE("male"), FEMALE("female");

    String genderName;

    Gender(String genderName) {
        this.genderName = genderName;
    }

    public String getGenderName() {
        return genderName;
    }

    public void setGenderName(String genderName) {
        this.genderName = genderName;
    }

    @Override
    public String toString() {
        return "Gender{" +
                "genderName='" + genderName + '\'' +
                "} " + super.toString();
    }
}
