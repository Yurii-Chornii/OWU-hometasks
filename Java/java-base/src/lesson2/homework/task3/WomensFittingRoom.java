package lesson2.homework.task3;

public class WomensFittingRoom implements WomensWear{
    private int roomNumber;

    public WomensFittingRoom() {
    }

    public WomensFittingRoom(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    @Override
    public void toDressAWoman() {
        System.out.println("Жінку одягнено в примірочній номер " + this.roomNumber);

    }

    @Override
    public String toString() {
        return "WomensFittingRoom{" +
                "roomNumber=" + roomNumber +
                '}';
    }
}
