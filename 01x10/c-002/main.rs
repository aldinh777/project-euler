fn fib_even_proc(max: i32) -> i32 {
    let mut sum = 0;
    let mut prev = 0;
    let mut next = 1;
    while next < max {
        let current = prev + next;
        if current % 2 == 0 {
            sum += current;
        }
        prev = next;
        next = current;
    }
    return sum;
}

fn main() {
    println!("{}", fib_even_proc(4_000_000));
}
