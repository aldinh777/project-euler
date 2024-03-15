import re

def getBritishVocal(num):
    nums = {
        0:  '',
        1:  'one',
        2:  'two',
        3:  'three',
        4:  'four',
        5:  'five',
        6:  'six',
        7:  'seven',
        8:  'eight',
        9:  'nine',
        10:  'ten',
        11:  'eleven',
        12:  'twelve',
        13:  'thirteen',
        14:  'fourteen',
        15:  'fifteen',
        16:  'sixteen',
        17:  'seventeen',
        18:  'eighteen',
        19:  'nineteen',
        20:  'twenty',
        30:  'thirty',
        40:  'forty',
        50:  'fifty',
        60:  'sixty',
        70:  'seventy',
        80:  'eighty',
        90:  'ninety',
    }
    if nums.get(num) != None:
        return nums.get(num)
    if num > 999:
        thousandth = int(num / 1000)
        rest = num - 1000 * thousandth
        vocalThousandth = getBritishVocal(thousandth) + ' thousand'
        vocalRest = ' and ' + getBritishVocal(rest) if rest > 0 else ''
        return vocalThousandth + vocalRest
    if num > 99:
        hundredth = int(num / 100)
        rest = num - 100 * hundredth
        vocalHundred = getBritishVocal(hundredth) + ' hundred'
        vocalRest = ' and ' + getBritishVocal(rest) if rest > 0 else ''
        return vocalHundred + vocalRest
    if num > 20:
        tenth = int(num / 10) * 10
        onceth = num % 10
        return getBritishVocal(tenth) + '-' + getBritishVocal(onceth)

def numberLetter():
    return sum([len(re.sub('[ -]', '', a)) for a in [getBritishVocal(b) for b in range(1, 1001)]])

print(numberLetter())
