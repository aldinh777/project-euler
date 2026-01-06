public class Main {

    public static boolean isPalindrome(int num) {
        String str = Integer.toString(num);
        return str.equals(new StringBuilder(str).reverse().toString());
    }

    public static int largestPalindrome(int num) {
        int result = 0;
        for (int i = num; i > 0; i--) {
            if (isPalindrome(num * i)) {
                result = num * i;
                break;
            }
        }
        return num > 0 ? Math.max(result, largestPalindrome(num - 1)) : 0;
    }

    public static void main(String[] args) {
        System.out.println(largestPalindrome(999));
    }
}
