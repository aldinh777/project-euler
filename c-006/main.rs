fn sum_dif_square(num: i32) -> i32 {
    let x: i32 = (1..(num + 1))
        .map(|a| i32::pow(a, 2))
        .sum();
    let y: i32 = (1..(num + 1))
        .sum();
    return i32::pow(y, 2) - x;
}

fn main() {
    println!("{}", sum_dif_square(100));
}
