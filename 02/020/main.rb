def factorial n
    n <= 1 ? 1 : n * factorial(n - 1)
end

def digitFactorial n
    factorial(n)
        .to_s
        .chars
        .map { |a| a.to_i }
        .sum
end

puts digitFactorial(100)
