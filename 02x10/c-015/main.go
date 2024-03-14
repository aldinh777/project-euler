package main

import "fmt"

func traverseGrid(x int, y int, mapx map[int]map[int]int) int {
	if x == 1 || y == 1 {
		return 1
	}
	_, hasMapX := mapx[x]
	if !hasMapX {
		mapx[x] = map[int]int{}
	}
	mapy := mapx[x]
	valMapY, hasMapY := mapy[y]
	if hasMapY {
		return valMapY
	}
	var result int
	if x == y {
		result = traverseGrid(x, y-1, mapx) * 2
		mapy[y] = result
		return result
	}
	result = traverseGrid(x-1, y, mapx) + traverseGrid(x, y-1, mapx)
	mapy[y] = result
	return result
}

func routesGrid(grid int) int {
	mapx := map[int]map[int]int{}
	corner := grid + 1
	totalRoutes := traverseGrid(corner, corner, mapx)
	return totalRoutes
}

func main() {
	fmt.Println(routesGrid(20))
}
