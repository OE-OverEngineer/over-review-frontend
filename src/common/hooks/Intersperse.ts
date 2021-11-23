/* eslint-disable @typescript-eslint/no-explicit-any */
export default function intersperse<T extends Record<string, any>>(
  obj: T,
  sep: string,
): string[] {
  const arr: string[] = [];
  obj.forEach((item: any) => {
    if (item.title) {
      arr.push(item.title);
    }
  });

  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(
    function (xs: string[], x: string) {
      return xs.concat([sep, x]);
    },
    [arr[0]],
  );
}
