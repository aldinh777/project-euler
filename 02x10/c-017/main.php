<?php
$filepath = implode(DIRECTORY_SEPARATOR, [__DIR__, "numbers.json"]);
$file = fopen($filepath, "r");
$read = fread($file, filesize($filepath));
$numbers = json_decode($read, true);

function numberLetter() {
    global $numbers;
    $sum = 0;
    foreach ($numbers as $value) {
        $sum += strlen(str_replace([" ", "-"], "", $value));
    }
    return $sum;
}

print numberLetter();
