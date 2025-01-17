import java.util.HashMap;
import java.util.Stack;

public class Main {

    static long collatzRule(long num) {
        return num % 2 == 0 ? num / 2 : num * 3 + 1;
    }

    static void fillChain(long nun, HashMap<Long, Long> map) {
        var stack = new Stack<Long>();
        var collatz = nun;
        stack.push(nun);

        while (!map.containsKey(collatz)) {
            stack.push(collatz);
            collatz = collatzRule(collatz);
        }
        while (!stack.empty()) {
            var pop = stack.pop();
            var moreChain = map.get(collatzRule(pop)) + 1;
            map.put(pop, moreChain);
        }
    }

    static long largestChain(long limit) {
        var chainLength = new HashMap<Long, Long>();
        chainLength.put((long)1, (long)1);
        for (var i = 2; i <= limit; i++) {
            fillChain(i, chainLength);
        }

        long largestIndex = 0;
        long largestValue = 0;
        for (var entry : chainLength.entrySet()) {
            var index = entry.getKey();
            var value = entry.getValue();
            if (value > largestValue) {
                largestValue = value;
                largestIndex = index;
            }
        }
        return largestIndex;
    }

    public static void main(String[] args) {
        System.out.println(largestChain(1_000_000));
    }
}