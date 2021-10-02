fn all_reducable(num: i64, reducer: i64) -> bool {
	for i in 1..reducer {
		if num % i != 0 {
			return false;
		}
	}
	return true;
}

fn reduce_result(num: i64, reducer: i64) -> i64 {
	for i in (2..reducer).rev() {
		if all_reducable(num/i, reducer) {
			return reduce_result(num/i, reducer);
		}
	}
	return num;
}

fn smallest_divisible(reducer: i64) -> i64 {
	let mut result = 1;
	for i in 2..reducer {
		result = reduce_result(result * i, i);
	}
	return result;
}

fn main() {
	println!("{}", smallest_divisible(20));
}
