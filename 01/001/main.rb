def sum35 max
    (0...max)
        .filter { |a| a % 3 == 0 || a % 5 == 0 }
        .sum
end

puts sum35(1000)
