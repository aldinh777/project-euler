def traverseGrid(x, y, mapx):
    if x == 1 or y == 1:
        return 1
    if mapx.get(x) == None:
        mapx[x] = {}
    mapy = mapx[x]
    if mapy.get(y) != None:
        return mapy[y]
    if x == y:
        result = traverseGrid(x, y-1, mapx) * 2
        mapy[y] = result
        return result
    result = traverseGrid(x-1, y, mapx) + traverseGrid(x, y-1, mapx)
    mapy[y] = result
    return result

def routesGrid(grid):
    mapx = {}
    corner = grid + 1
    totalRoutes = traverseGrid(corner, corner, mapx)
    return totalRoutes

print(routesGrid(20))
