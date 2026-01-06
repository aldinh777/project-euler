<?php

function factorial($n) {
    return $n == 1 ? 1 : bcmul($n, factorial($n - 1));
}

function digitFactorial($n) {
    return array_sum(str_split(factorial($n)));
}

print digitFactorial(100);
