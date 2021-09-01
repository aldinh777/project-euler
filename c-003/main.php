<?php
function largestPrimeFactor($num) {
	for ($i = 2; $i < $num; $i++) {
        if ($num % $i == 0) {
            return largestPrimeFactor($num / $i);
        }
    }
    return $num;
}

print largestPrimeFactor(600_851_475_143);
