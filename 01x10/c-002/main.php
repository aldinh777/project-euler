<?php
function fibEvenProc($max) {
    $sum = 0;
    $prev = 0;
    $next = 1;
    while ($next < $max) {
        $current = $prev + $next;
        if ($current % 2 == 0) {
            $sum += $current;
        }
        $prev = $next;
        $next = $current;
    }
    return $sum;
}

print fibEvenProc(4_000_000);
