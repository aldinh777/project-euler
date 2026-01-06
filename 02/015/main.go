package main

import "fmt"

func TraverseGrid(x int, y int, mapx map[int]map[int]int) int {
	if x == 1 || y == 1 {
		return 1
	}
	var _, hasMapX = mapx[x]
	if !hasMapX {
		mapx[x] = map[int]int{}
	}
	var mapy = mapx[x]
	var valMapY, hasMapY = mapy[y]
	if hasMapY {
		return valMapY
	}
	var result int
	if x == y {
		result = TraverseGrid(x, y-1, mapx) * 2
		mapy[y] = result
		return result
	}
	result = TraverseGrid(x-1, y, mapx) + TraverseGrid(x, y-1, mapx)
	mapy[y] = result
	return result
}

func RoutesGrid(grid int) int {
	var mapx = map[int]map[int]int{}
	var corner = grid + 1
	var totalRoutes = TraverseGrid(corner, corner, mapx)
	return totalRoutes
}

func main() {
	fmt.Println(RoutesGrid(20))
}
