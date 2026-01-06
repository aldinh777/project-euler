const triangle = (n) => (n * (n + 1)) / 2
const pentagonal = (n) => (n * (3 * n - 1)) / 2
const hexagonal = (n) => n * (2 * n - 1)

function triphexonaleAt(at) {
    let t_idx = 2
    let p_idx = 2
    let h_idx = 2
    let lt = triangle(t_idx)
    let lp = pentagonal(p_idx)
    let lh = hexagonal(h_idx)

    while (at > 0) {
        if (lt < lp || lt < lh) {
            lt = triangle(++t_idx)
        } else if (lp < lt) {
            lp = pentagonal(++p_idx)
        } else {
            lh = hexagonal(++h_idx)
        }
        if (lt === lp && lt === lh) {
            at--
        }
    }

    return lt
}

console.log(triphexonaleAt(2))
