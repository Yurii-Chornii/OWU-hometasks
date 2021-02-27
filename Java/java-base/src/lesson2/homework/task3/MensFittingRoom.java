package lesson2.homework.task3;

public class MensFittingRoom implements MensWear{
    private int roomNumber;
    public MensFittingRoom() {
    }

    public MensFittingRoom(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    @Override
    public void toDressAMan() {
        System.out.println("Чоловіка одягнено в примірочній номер " + this.roomNumber);
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    @Override
    public String toString() {
        return "MensFittingRoom{" +
                "roomNumber=" + roomNumber +
                '}';
    }
}
