<?php

function numberOfSundays() {
    $sundays = 0;
    for ($year = 1901; $year <= 2000; $year++) {
        for ($month = 1; $month <= 12; $month++) {
            $day = mktime(0, 0, 0, $month, 1, $year);
            if (strcmp(date("l", $day), "Sunday") == 0) {
                $sundays++;
            }
        }
    }
    return $sundays;
}

print numberOfSundays();
