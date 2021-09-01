import java.util.stream.Stream;

public class Main {

    public static int fibEven(int max) {
        return Stream.iterate(new int[] {1,1}, a -> a[0] < max , a -> new int[] {a[0]+a[1], a[0]})
            .mapToInt(a -> a[0])
            .filter(a -> a % 2 == 0)
            .sum();
    }

    public static void main(String[] args) {
        System.out.println(fibEven(4_000_000));
    }
}
