public class Main {

    public static boolean allReducable(long num, long reducer) {
        for (long i = 1; i <= reducer; i++) {
            if (num % i != 0) {
                return false;
            }
        }
        return true;
    }
    
    public static long reduceResult(long num, long reducer) {
        for (long i = reducer; i > 1; i--) {
            if (allReducable(num / i, reducer)) {
                return reduceResult(num / i, reducer);
            }
        }
        return num;
    }
    
    public static long smallestDivisible(long reducer) {
        long result = 1;
        for (long i = 2; i <= reducer; i++) {
            result = reduceResult(result * i, i);
        }
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println(smallestDivisible(20));
    }
}