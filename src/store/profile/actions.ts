export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const changeName = (name: string) => ({
    type: CHANGE_NAME,
    name
});

export const loading = () => ({
    type: "LOADING",
});

export const success = (payload: any) => ({
    type: "SUCCESS",
    payload,
});

export const cangecountR = (countR: number) => ({
    type: "CHANGECOUNTR",
    countR,
});

export const cangecountA = (countA: number) => ({
    type: "CHANGECOUNTA",
    countA,
});

export const cangecountV = (countV: number) => ({
    type: "CHANGECOUNTV",
    countV,
});

export const error = (error: Error) => ({
    type: "ERROR",
    error,
});
