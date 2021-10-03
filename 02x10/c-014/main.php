<?php
function collatzRule($num) {
    return $num % 2 === 0 ? $num / 2 : $num * 3 + 1;
}

function fillChain($num, &$map) {
    $stack = [$num];
    $collatz = $num;
    while (!array_key_exists($collatz, $map)) {
        array_push($stack, $collatz);
        $collatz = collatzRule($collatz);
    }
    while (count($stack) > 0) {
        $pop = array_pop($stack);
        $moreChain = $map[collatzRule($pop)] + 1;
        $map[$pop] = $moreChain;
    }
}

function largestChain($limit) {
    $chainLength = [];
    $chainLength[1] = 1;
    for ($i = 2; $i <= $limit; $i++) {
        fillChain($i, $chainLength);
    }
    $largestIndex = 0;
    $largestValue = 0;
    foreach ($chainLength as $key => $value) {
        if ($value > $largestValue) {
            $largestValue = $value;
            $largestIndex = $key;
        }
    }
    return $largestIndex;
}

print largestChain(1_000_000);
