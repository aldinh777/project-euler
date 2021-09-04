def isPalindrome num
    str = num.to_s
    str == str.reverse
end

def largestPalindrome num
    result = 0
    for i in (0..num).reverse_each do
        if isPalindrome(num * i) then
            result = num * i
            break
        end
    end
    num > 0 ? [result, largestPalindrome(num-1)].max : 0
end

puts largestPalindrome(999)
