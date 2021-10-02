function traverseGrid(x, y, mapx) {
    if (x === 1 || y === 1) {
        return 1
    }
    if (!mapx.has(x)) {
        mapx.set(x, new Map())
    }
    let mapy = mapx.get(x)
    if (mapy.has(y)) {
        return mapy.get(y)
    }
    if (x === y) {
        const result = traverseGrid(x, y-1, mapx) * 2
        mapy.set(y, result)
        return result
    }
    const result = traverseGrid(x-1, y, mapx) + traverseGrid(x, y-1, mapx)
    mapy.set(y, result)
    return result
}

function routesGrid(grid) {
    const mapx = new Map()
    const corner = grid + 1
    const totalRoutes = traverseGrid(corner, corner, mapx)
    return totalRoutes
}

console.log(routesGrid(20))
