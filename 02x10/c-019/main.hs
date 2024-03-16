import Data.Time.Format
import Data.Time

dateRanges = [parseDate $ show month ++ " " ++ show year | year <- [1901..2000], month <- [1..12]]
    where
        parseDate strDate = parseTimeOrError True defaultTimeLocale "%-m %Y" strDate :: UTCTime


numberOfSundays = length [date | date <- dateRanges, formatTime defaultTimeLocale "%A" date == "Sunday"] 

main = do
    print numberOfSundays
