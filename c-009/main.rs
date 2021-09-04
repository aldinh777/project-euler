fn get_last_pair(a: i32, b: i32) -> i32 {
    return ((a.pow(2) + b.pow(2)) as f32).sqrt() as i32;
}

fn is_pythagoras_pair(a: i32, b: i32) -> bool {
    return a.pow(2) + b.pow(2) == get_last_pair(a, b).pow(2);
}

fn pythagorean_triplet_explosion(sum_total: i32) -> i32 {
    let mut a: i32 = 1;
    loop {
        for b in 1..(a + 1) {
            if is_pythagoras_pair(a, b) {
                let c: i32 = get_last_pair(a, b);
                if a + b + c == sum_total {
                    return a * b * c;
                }
            }    
        }
        a = a + 1;
    }
}

fn main() {
    println!("{}", pythagorean_triplet_explosion(1000));
}
