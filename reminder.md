## Loop

### Ranges

- Go & JS `for i < 10`
- Java & Python `IntStream::range(1, 10) & range(1, 10)` 1 -> 9
- PHP `range(1, 10)` 1 -> 10
- Rust `1..10` 1 -> 9
- Haskell, R & Ruby `1..10` 1 -> 10

## Array

### Map

- Haskell : `map fn array`
- Java : `Stream.map(Supplier s)`
- JS & Ruby : `array.map(cb)`
- PHP : `array_map(fn (v_array, ...v_next), array, ...next)`

### Filter

- Haskell : `filter fn array`
- JS & Ruby : `array.filter(cb)`
- Java : `Stream.filter(Supplier s)`
- PHP : `array_filter(array, fn (val))`

### Length

- Go : `len(array)`
- JS : `array.length`
- PHP : `count(array) | sizeof(array)`

### Append

- Go : `append(array, item)`
- Java : `array.add(item)`
- PHP : `array_push(array, item)`
- Python : `array.append(item)`
- JS & Ruby & Rust : `array.push(item)`

## Math

### Sum

- Haskell : `sum array`
- Java : `IntStream.sum()`
- JS : `Array.reduce((a, b) => a + b)`
- PHP : `array_sum(array)`
- Ruby & Rust : `Array.sum`
- R & Python : `sum(vector)`

### Max

- Go : `math.Max(float64 a, float64 b)`
- Haskell : `max a b`
- JS & Java : `Math.max(a, b)`
- PHP & R : `max(a, b, c, ...) || max(array)`
- Python : `max(a, b)`
- Ruby : `array.max`
- Rust : `cmp::max(a, b)`

### Power

- Go : `math.Pow(float64 a, int b)`
- Haskell : `a ^ b`
- Java : `Math.pow(a, b)`
- Rust : `a.pow(b)`
- JS, PHP, Python, R & Ruby : `a ** b`

## String

### Int -> Str

- Go : `strconv.Itoa(int num)`
- Haskell : `show num`
- Java : `Integer.toString(int num)`
- JS : `num.toString()`
- R : `toString(num)`
- Ruby : `num.to_s`
- Rust : `num.to_string()`

### Reverse

- Haskell : `reverse str`
- Java : `new StringBuilder(str).reverse().toString()`
- JS : `str.split().reverse().join('')`
- PHP : `strrev(str)`
- Python : `str[::-1]`
- R : `paste(rev(strsplit(str, "")[[1]]), collapse="")`
- Ruby : `str.reverse`
- Rust : `strnum.chars().rev().collect::<String>()`

### Floor

- Go : `math.Floor(num)`
- Java && JS : `Math.floor`
- PHP, Python & R : `floor(num)`
- Ruby : `num.to_i`
