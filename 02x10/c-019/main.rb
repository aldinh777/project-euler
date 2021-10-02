require 'date'

def numberOfSundays
    sundays = 0
    for year in 1901..2000 do
        for month in 1..12 do
            theDay = Date.new(year, month, 1)
            if theDay.wday == 0 then
                sundays += 1
            end
        end
    end
    sundays
end

puts numberOfSundays
