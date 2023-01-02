import { Store } from "../store";

export const selectName = (store: Store) => store.name;

export const isLoading = (store: Store) => store.isLoading;

export const getData = (store: Store) => store.data;

export const getError = (store: Store) => store.error;
