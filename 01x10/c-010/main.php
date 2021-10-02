<?php
function theCoolerIsPrime($number, $primelist) {
    $limitcheck = $number;
    foreach ($primelist as $i) {
        if ($i > $limitcheck) {
            return TRUE;
        }
        if ($number % $i == 0) {
            return FALSE;
        } else {
            $limitcheck = $number / $i;
        }
    }
    return TRUE;
}

function primeSumUpto($limit) {
    $primes = [];
    for ($i = 2; $i < $limit; $i++) {
        if (theCoolerIsPrime($i, $primes)) {
            array_push($primes, $i);
        }
    }
    return array_sum($primes);
}

print primeSumUpto(2_000_000);
