import java.util.ArrayList;
import java.util.List;

public class Main {

    public static boolean theCoolerIsPrime(int number, List<Integer> primelist) {
        int limitcheck = number;
        for (int i : primelist) {
            if (i > limitcheck) {
                return true;
            }
            if (number % i == 0) {
                return false;
            } else {
                limitcheck = number / i;
            }
        }
        return true;
    }
    
    public static long primeSumUpto(int limit) {
        long result = 0;
        List<Integer> primes = new ArrayList<>();
        for (int i = 2; i < limit; i++) {
            if (theCoolerIsPrime(i, primes)) {
                primes.add(i);
                result += i;
            }
        }
        return result;
    }    

    public static void main(String[] args) {
        System.out.println(primeSumUpto(2_000_000));
    }
}