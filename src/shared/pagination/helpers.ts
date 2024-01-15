export function paginate({current, max}: {current: number; max: number}) {
  if (!current || !max) {
    return null;
  }

  let prev = current === 1 ? null : current - 1,
    next = current === max ? null : current + 1;
  const items: Array<{id: number; value: string}> = [{id: 1, value: '1'}];

  if (current === 1 && max === 1) {
    return {current, prev, next, items};
  }
  if (current > 4) {
    items.push({id: 2, value: '...'});
  }

  let r = 2,
    r1 = current - r,
    r2 = current + r;

  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) {
    items.push({id: i, value: String(i)});
  }

  if (r2 + 1 < max) {
    items.push({id: r2 + 1, value: '...'});
  }
  if (r2 < max) {
    items.push({id: max, value: String(max)});
  }

  return {current, prev, next, items};
}
