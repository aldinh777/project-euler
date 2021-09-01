public class Main {

    public static long largestPrimeFactor(long num) {
        for (long i = 2; i < num; i++) {
            if (num % i == 0) {
                return largestPrimeFactor(num / i);
            }
        }
        return num;
    }

    public static void main(String[] args) {
        System.out.println(largestPrimeFactor(600_851_475_143L));
    }
}
