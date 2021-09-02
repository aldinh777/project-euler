use std::cmp;

fn is_palindrome(num: i32) -> bool {
    let strnum = num.to_string();
    return strnum == strnum
        .chars()
        .rev()
        .collect::<String>();
}

fn largest_palindrome(num: i32) -> i32 {
    let mut result = 0;
    for i in (0..num).rev() {
        if is_palindrome(num * i) {
            result = num * i;
            break;
        }
    }
    return if num > 0 {
        cmp::max(result, largest_palindrome(num-1))
    } else {
        0
    }
}

fn main() {
    println!("{}", largest_palindrome(999));
}
