def traverseGrid x, y, mapx
    if x == 1 or y == 1 then
        return 1
    end
    if !mapx.has_key? x then
        mapx[x] = {}
    end
    mapy = mapx[x]
    if mapy.has_key? y then
        return mapy[y]
    end
    if x == y then
        result = traverseGrid(x, y-1, mapx) * 2
        mapy[y] = result
        return result
    end
    result = traverseGrid(x-1, y, mapx) + traverseGrid(x, y-1, mapx)
    mapy[y] = result
    result
end

def routesGrid grid
    mapx = {}
    corner = grid + 1
    totalRoutes = traverseGrid(corner, corner, mapx)
    totalRoutes
end

puts routesGrid(20)
