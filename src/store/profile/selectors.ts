import { Store } from "../store";

export const selectName = (store: Store) => store.name;

export const isLoading = (store: Store) => store.isLoading;

export const getData = (store: Store) => store.data;

export const getError = (store: Store) => store.error;

export const getCountR = (store: Store) => store.countR;

export const getCountA = (store: Store) => store.countA;

export const getCountV = (store: Store) => store.countV;
