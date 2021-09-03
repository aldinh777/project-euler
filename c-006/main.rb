def sumDifSquare num
    x = (1..num).map { |a| a ** 2 }.sum
    y = (1..num).sum ** 2
    y - x
end

print sumDifSquare 100
