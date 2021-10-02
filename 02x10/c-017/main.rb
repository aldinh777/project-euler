require 'json'

filepath = File.join(__dir__, 'numbers.json')
$numbers = JSON.parse(File.read(filepath))

def numberLetter
    $numbers
        .map { |_, a| a.gsub(/[ -]/, '').length }
        .sum
end

puts numberLetter
