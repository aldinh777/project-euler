from datetime import datetime

def numberOfSundays():
    sundays = 0
    for year in range(1901, 2000 + 1):
        for month in range(1, 12 + 1):
            theDay = datetime(year, month, 1)
            if theDay.weekday() == 6:
                sundays += 1
    return sundays

print(numberOfSundays())
