<?php
function factorsLengthOver($num, $max) {
    $totalFactor = 0;
    $limit = $num;
    for ($i = 1; $i < $limit; $i++) {
        if ($num % $i == 0) {
            $totalFactor += $num / $i == $i ? 1 : 2;
            $limit = $num / $i;
            if ($totalFactor > $max) {
                return TRUE;
            }
        }
    }
    return FALSE;
}

function triangleFactorOver($maxFactor) {
    $triangle = 0;
    for ($i = 1; ; $i++) {
        $triangle += $i;
        if (factorsLengthOver($triangle, $maxFactor)) {
            break;
        }
    }
    return $triangle;
}

print triangleFactorOver(500);
