<?php
function sum35($max) {
    $array = range(0, $max - 1);
    $array = array_filter($array, fn($a) => $a % 3 == 0 or $a % 5 == 0);
    return array_sum($array);
}

print sum35(1000);
