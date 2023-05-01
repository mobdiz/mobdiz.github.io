import type {Store} from "effector";
import {createPersist} from 'effector-storage/local'

const prefix = 'triangles';
const divider = '_';

const persist = createPersist({
  keyPrefix: prefix + divider,
})

export function attachPersist<State>(store: Store<State>, key: string) {
  persist({store, key})
}

export function get<State>(key: string): State | null {
  const keyWithPrefix = prefix + divider + key

  return localStorage.getItem(keyWithPrefix)
    ? JSON.parse(localStorage.getItem(keyWithPrefix)!)
    : null
}
