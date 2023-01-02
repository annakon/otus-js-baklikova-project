import { CHANGE_NAME } from "./actions";

export type ProfileActions = ChangeName;

export interface ChangeName {
    type: typeof CHANGE_NAME | "LOADING" | "SUCCESS" | "ERROR";
    name: string;
}
