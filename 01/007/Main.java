public class Main {

    public static boolean isPrime(int number) {
        int limit = number;
        for (int i = 2; i < limit; i++) {
            if (number % i == 0) {
                return false;
            } else {
                limit = (int) Math.floor(number / i);
            }
        }
        return true;
    }
    
    public static int primeAt(int at) {
        int loopen = 0, number = 1;
        while (loopen < at) {
            number++;
            if (isPrime(number)) {
                loopen++;
            }
        }
        return number;
    }
    
    public static void main(String[] args) {
        System.out.println(primeAt(10001));
    }
}