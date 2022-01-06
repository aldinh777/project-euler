public class Main {

    static boolean factorsLengthOver(int num, int max) {
        int totalFactor = 0;
        int limit = num;
        for (int i = 1; i < limit; i++) {
            if (num % i == 0) {
                totalFactor += num / i == i ? 1 : 2;
                limit = num / i;
                if (totalFactor > max) {
                    return true;
                }
            }
        }
        return false;
    }
    
    static int triangleFactorOver(int maxFactor) {
        int triangle = 0;
        for (int i = 1; ; i++) {
            triangle += i;
            if (factorsLengthOver(triangle, maxFactor)) {
                break;
            }
        }
        return triangle;
    }
    
    public static void main(String[] args) {
        System.out.println(triangleFactorOver(500));
    }
}
