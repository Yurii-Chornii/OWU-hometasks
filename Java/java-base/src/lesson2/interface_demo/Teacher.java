package lesson2.interface_demo;

public class Teacher implements Runner{
    private String name;

    @Override
    public void doRun() {
        System.out.println("teacher can run too");
    }

    private String education;

    public Teacher() {
    }

    public Teacher(String name, String education) {
        this.name = name;
        this.education = education;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "name='" + name + '\'' +
                ", education='" + education + '\'' +
                '}';
    }
}
