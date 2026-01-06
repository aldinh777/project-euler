fn is_prime(number: i32) -> bool {
	let mut limit = number;
    let mut i = 2;
	while i < limit {
		if number % i == 0 {
			return false;
		} else {
			limit = number / i;
		}
        i += 1;
	}
	return true;
}

fn prime_at(at: i32) -> i32 {
	let mut loopen = 0;
    let mut number = 1;
	while loopen < at {
		number += 1;
		if is_prime(number) {
			loopen += 1;
		}
	}
	return number;
}

fn main() {
	println!("{}", prime_at(10001))
}
