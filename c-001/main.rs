fn sum35(max: i32) -> i32 {
    return (0..max)
        .filter(|a| a % 3 == 0 || a % 5 == 0)
        .sum();
}

fn main() {
    println!("{}", sum35(1000));
}
