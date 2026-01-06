<?php
function sum2pow($power) {
    $total = bcpow(2, $power);
    return array_sum(str_split($total));
}

print_r(sum2pow(1000));
