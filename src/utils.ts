export function deepMerge (a: any, ...more: any[]) {
  if (!more.length) return a;
  return more.reduce((a, b) => {
    const ia = instance(a);
    const ib = instance(b);
    if (ia !== ib) return b;

    if (a instanceof Array) return a.concat(b);

    if (a instanceof Map) {
      for (const [key, bval] of b) {
        a.set(key, a.has(key) ? deepMerge([a.get(key), bval]) : bval);
      }
    }

    if (ia === Object) {
      for (const key in b) {
        const bval = Reflect.get(b, key);
        Reflect.set(a, key, key in a ? deepMerge([Reflect.get(a, key), bval]) : bval);
      }
      return a;
    }

    return b;
  }, a);
}

export function instance(item: any) {
  if (item instanceof Array) return Array;
  if (item instanceof Map) return Map;
  if (item instanceof Promise) return Promise;
  if (item instanceof Function) return Function;
  if (item === null) return null;
  if (item === undefined) return undefined;
  switch (typeof item) {
    case 'boolean': return Boolean;
    case 'string': return String;
    case 'number': return Number;
    case 'symbol': return Symbol;
    case 'object': return Object;
    default: return undefined;
  }
}
