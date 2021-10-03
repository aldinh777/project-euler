<?php
function traverseGrid($x, $y, &$mapx) {
    if ($x == 1 || $y == 1) {
        return 1;
    }
    if (!array_key_exists($x, $mapx)) {
        $mapx[$x] = [];
    }
    $mapy = $mapx[$x];
    if (array_key_exists($y, $mapy)) {
        return $mapy[$y];
    }
    if ($x == $y) {
        $result = traverseGrid($x, $y-1, $mapx) * 2;
        $mapx[$x][$y] = $result;
        return $result;
    }
    $result = traverseGrid($x-1, $y, $mapx) + traverseGrid($x, $y-1, $mapx);
    $mapx[$x][$y] = $result;
    return $result;
}

function routesGrid($grid) {
    $mapx = [];
    $corner = $grid + 1;
    $totalRoutes = traverseGrid($corner, $corner, $mapx);
    return $totalRoutes;
}

print routesGrid(20);
