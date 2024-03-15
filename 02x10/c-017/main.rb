def getBritishVocal num
    case num
        when 0 then return ''
        when 1 then return 'one'
        when 2 then return 'two'
        when 3 then return 'three'
        when 4 then return 'four'
        when 5 then return 'five'
        when 6 then return 'six'
        when 7 then return 'seven'
        when 8 then return 'eight'
        when 9 then return 'nine'
        when 10 then return 'ten'
        when 11 then return 'eleven'
        when 12 then return 'twelve'
        when 13 then return 'thirteen'
        when 14 then return 'fourteen'
        when 15 then return 'fifteen'
        when 16 then return 'sixteen'
        when 17 then return 'seventeen'
        when 18 then return 'eighteen'
        when 19 then return 'nineteen'
        when 20 then return 'twenty'
        when 30 then return 'thirty'
        when 40 then return 'forty'
        when 50 then return 'fifty'
        when 60 then return 'sixty'
        when 70 then return 'seventy'
        when 80 then return 'eighty'
        when 90 then return 'ninety'
    end
    if num > 999 then
        thousandth = (num / 1000).floor
        rest = num - 1000 * thousandth
        vocalThousandth = getBritishVocal(thousandth) + ' thousand'
        vocalRest = rest > 0 ? ' and ' + getBritishVocal(rest) : ''
        return vocalThousandth + vocalRest
    end
    if num > 99 then
        hundredth = (num / 100).floor
        rest = num - 100 * hundredth
        vocalHundred = getBritishVocal(hundredth) + ' hundred'
        vocalRest = rest > 0 ? ' and ' + getBritishVocal(rest) : ''
        return vocalHundred + vocalRest
    end
    if num > 20 then
        tenth = (num / 10) * 10.floor
        onceth = num % 10
        return getBritishVocal(tenth) + '-' + getBritishVocal(onceth)
    end
end

def numberLetter
    (1..1000)
        .map { |a| getBritishVocal(a).gsub(/[ -]/, '').length }
        .sum
end

puts numberLetter
