public class Main {
    
    public static double getLastPair(int a, int b) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
    
    public static boolean isPythagorasPair(int a, int b) {
        return Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(getLastPair(a, b), 2);
    }
    
    public static int pythagoreanTripletExplosion(int sumTotal) {
        for (int a = 1;; a++) {
            for (int b = 1; a > b ; b++) {
                if (isPythagorasPair(a, b)) {
                    double c = getLastPair(a, b);
                    if (a + b + c == sumTotal) {
                        return a * b * (int) c;
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
        System.out.println(pythagoreanTripletExplosion(1000));
    }
}
