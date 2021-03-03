import { Actions, Fn, Globals, ReadOnly, Ref, Store } from '@/types';

export const refActions: Fn<Actions>;
export const useActions: Fn<Readonly<Actions>>;

export const refStore: Fn<Store>;
export const useStore: Fn<ReadOnly<Store>>;

export const refGlobals: Fn<Globals>;
export const useGlobals: Fn<Globals>;

export declare function local<T>(key: string, value: T): Ref<T>;

export const append: Readonly<{
  action: Function;
  actions: Function;
  ref: Function;
}>;
