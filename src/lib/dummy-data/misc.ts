export function select<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function shuffle<T>(arr: T[]): T[] {
  const _arr = arr.slice();
  const ans = [];

  while (_arr.length > 0) {
    const index = Math.floor(Math.random() * _arr.length);
    ans.push(_arr[index]);
    _arr.splice(index, 1);
  }

  return ans;
}

export function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

export function weighedSelect<T>(arr: T[], weights: number[]): T {
  const total = weights.slice().reduce((a, b) => a + b, 0);
  const r = Math.random() * total;

  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += weights[i];
    if (r < acc) {
      return arr[i];
    }
  }

  return arr[arr.length - 1];
}
