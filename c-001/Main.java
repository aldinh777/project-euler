import java.util.stream.IntStream;

public class Main {

    public static int sum35(int max) {
        return IntStream.range(0, max)
            .filter(a -> a % 3 == 0 || a % 5 == 0)
            .sum();
    }

    public static void main(String[] args) {
        System.out.println(sum35(1000));
    }
}
