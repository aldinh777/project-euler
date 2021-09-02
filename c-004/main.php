<?php
function isPalindrome($num) {
    return $num == strrev($num);
}

function largestPalindrome($num) {
    $result = 0;
    for ($i = $num; $i > 0; $i--) {
        if (isPalindrome($num * $i)) {
            $result = $num * $i;
            break;
        }
    }
    return $num > 0 ? max($result, largestPalindrome($num - 1)) : 0;
}

print largestPalindrome(999);
