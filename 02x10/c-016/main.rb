def sum2power power
    (2 ** power)
        .to_s
        .chars
        .map {|a| a.to_i}
        .sum
end

puts sum2power(1_000)
