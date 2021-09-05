fn the_cooler_is_prime(number: i32, primelist: &Vec<i32>) -> bool {
	let mut limitcheck = number;
	for i in primelist {
        if *i > limitcheck {
			return true;
		}
		if number % i == 0 {
			return false;
		} else {
			limitcheck = number / i;
		}
	}
	return true
}

fn prime_sum_upto(limit: i32) -> i64 {
	let mut primes = Vec::new();
	let mut total: i64 = 0;
	for i in 2..limit {
		if the_cooler_is_prime(i, &primes) {
			primes.push(i);
			total += i as i64;
		}
	}
	return total;
}

fn main() {
	println!("{}", prime_sum_upto(2_000_000));
}
