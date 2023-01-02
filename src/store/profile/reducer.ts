import { Reducer } from "redux";
import { CHANGE_NAME } from "./actions";

interface State {
    name: string;
    isLoading: boolean;
    data: any | undefined;
    error: Error | undefined;
}

const initialState: State = {
    name: "react",
    isLoading: false,
    data: {},
    error: undefined
};

export const profileReducer: Reducer<State> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CHANGE_NAME: {
            return { ...state, name: action.name };
        }
        case "LOADING":
            return { ...state, isLoading: true };
        case "SUCCESS":
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: undefined,
            };
        case "ERROR":
            return {
                ...state,
                isLoading: false,
                data: undefined,
                error: action.error,
            };
        default:
            return state;
    }
};
