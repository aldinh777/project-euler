<?php
$filepath = implode(DIRECTORY_SEPARATOR, [__DIR__, "numbers.json"]);
$file = fopen($filepath, "r");
$numbers = json_decode(fread($file, filesize($filepath)));

function numberLetter() {
    $sum = 0;
    foreach ($numbers as $value) {
        $sum += strlen(str_replace([" ", "-"], "", $value));
    }
    return $sum;
}

print numberLetter();
