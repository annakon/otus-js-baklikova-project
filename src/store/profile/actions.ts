import { ChangeName } from "./types";

export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const changeName = (name: string): ChangeName => ({
    type: CHANGE_NAME,
    name
});
