fn factors_length_over(num: i32, max: i32) -> bool {
    let mut total_factor = 0;
    let mut limit = num;
    let mut i = 1;
    while i < limit {
        if num % i == 0 {
            if num / i == i {
                total_factor += 1;
            } else {
                total_factor += 2;
            }
            limit = num / i;
            if total_factor > max {
                return true;
            }
        }
        i+=1;
    }
    return false;
}

fn triangle_factor_over(max_factor: i32) -> i32 {
    let mut triangle = 0;
    let mut i = 1;
    loop {
        triangle += i;
        if factors_length_over(triangle, max_factor) {
            break;
        }
        i+=1;
    }
    return triangle;
}

fn main() {
    println!("{}", triangle_factor_over(500));
}
