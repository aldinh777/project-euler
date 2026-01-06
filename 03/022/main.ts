import names from "./names.json";

function sumScoreNames(list: any[]) {
  return list
    .sort()
    .map(
      (s: string, i: number) =>
        (i + 1) *
        s
          .split("")
          .map((s: string) => s.charCodeAt(0) - 64)
          .reduce((a: any, b: any) => a + b),
    )
    .reduce((a: any, b: any) => a + b);
}

console.log(sumScoreNames(names));
