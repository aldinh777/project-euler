def collatzRule num
    num % 2 == 0 ? num / 2 : num * 3 + 1
end

def fillChain num, list
    stack = [num]
    collatz = num
    while !list.has_key? collatz do
        stack.push(collatz)
        collatz = collatzRule(collatz)
    end
    while stack.length > 0 do
        pop = stack.pop
        moreChain = list[collatzRule(pop)] + 1
        list[pop] = moreChain
    end
end

def largestChain limit
    chainLength = {1 => 1}
    for i in 2..limit do
        fillChain(i, chainLength)
    end
    largestIndex = 0
    largestValue = 0
    for i, val in chainLength do
        if val > largestValue then
            largestValue = val
            largestIndex = i
        end
    end
    largestIndex
end

puts largestChain(1_000_000)
