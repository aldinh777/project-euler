<?php
function sumDifSquare($num) {
    $x = array_sum(array_map(fn($a) => $a ** 2, range(1, $num)));
    $y = array_sum(range(1, $num)) ** 2;
    return $y - $x;
}

print sumDifSquare(100);
