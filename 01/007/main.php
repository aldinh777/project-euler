<?php
function isPrime($number) {
    $limit = $number;
    for ($i = 2; $i < $limit; $i++) {
        if ($number % $i === 0) {
            return FALSE;
        } else {
            $limit = floor($number / $i);
        }
    }
    return TRUE;
}

function primeAt($at) {
    $loopen = 0;
    $number = 1;
    while ($loopen < $at) {
        $number++;
        if (isPrime($number)) {
            $loopen++;
        }
    }
    return $number;
}

print primeAt(10001);
