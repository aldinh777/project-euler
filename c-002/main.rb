def fibEvenProc max
    sum, prev_val, next_val = 0, 0, 1
    while next_val < max
        current = prev_val + next_val
        if current % 2 == 0
            sum += current
        end
        prev_val, next_val = next_val, current
    end
    sum
end

puts fibEvenProc 4_000_000
