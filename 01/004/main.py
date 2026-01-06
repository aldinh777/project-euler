def isPalindrome(num):
	strnum = str(num)
	return strnum == strnum[::-1]

def largestPalindrome(num):
    result = 0
    for i in range(num, 0, -1):
        for j in range(i, 0, -1):
            if isPalindrome(i * j):
                result = max(result, i * j)
                break
    return result

print(largestPalindrome(999))
