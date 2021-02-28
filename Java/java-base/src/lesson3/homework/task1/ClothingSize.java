package lesson3.homework.task1;

public enum ClothingSize {
    XXS(40){
        @Override
        public String getDescription() { return "XXS"; }
    },
    XS(42){
        @Override
        public String getDescription() { return "XS"; }
    },
    S(44){
        @Override
        public String getDescription() { return "S"; }
    },
    M(46){
        @Override
        public String getDescription() { return "M"; }
    },
    L(48){
        @Override
        public String getDescription() { return "L"; }
    };

    int euroSize;

    ClothingSize() {
    }

    ClothingSize(int euroSize) {
        this.euroSize = euroSize;
    }

    public int getEuroSize() {
        return euroSize;
    }

    public void setEuroSize(int euroSize) {
        this.euroSize = euroSize;
    }

    public abstract String getDescription();

    @Override
    public String toString() {
        return "ClothingSize{" +
                "euroSize=" + euroSize +
                "} " + super.toString();
    }
}
