import java.util.stream.IntStream;

public class Main {

    public static int sumDifSquare(int num) {
        int x = IntStream.rangeClosed(1, num)
            .map(a -> (int) Math.pow(a, 2))
            .sum();
        int y = IntStream.rangeClosed(1, num)
            .sum();
        return (int) Math.pow(y, 2) - x;
    }
    
    public static void main(String[] args) {
        System.out.println(sumDifSquare(100));
    }
}
