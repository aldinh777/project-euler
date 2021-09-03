<?php
function allReducable($num, $reducer) {
    for ($i = 1; $i <= $reducer; $i++) {
        if ($num % $i !== 0) {
            return FALSE;
        }
    }
    return TRUE;
}

function reduceResult($num, $reducer) {
    for ($i = $reducer; $i > 1; $i--) {
        if (allReducable($num / $i, $reducer)) {
            return reduceResult($num / $i, $reducer);
        }
    }
    return $num;
}

function smallestDivisible($reducer) {
    $result = 1;
    for ($i = 2; $i <= $reducer; $i++) {
        $result = reduceResult($result * $i, $i);
    }
    return $result;
}

print smallestDivisible(20);
