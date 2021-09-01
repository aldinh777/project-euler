fn largest_prime_factor(num: i64) -> i64 {
    for i in 2..(num-1) {
        if num % i == 0 {
            return largest_prime_factor(num / i);
        }
    }
    return num;
}

fn main() {
    println!("{}", largest_prime_factor(600_851_475_143));
}
