import { Reducer } from "redux";
import { CHANGE_NAME } from "./actions";

interface State {
    name: string;
    isLoading: boolean;
    data: any | undefined;
    error: Error | undefined;
    countR: number;
    countA: number;
    countV:number;
}

const initialState: State = {
    name: "react",
    isLoading: false,
    data: {},
    error: undefined,
    countR: 0,
    countA: 0,
    countV: 0,
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
        case "CHANGECOUNTR": {
            return { ...state,isLoading: false, countR: action.countR};
        }
        case "CHANGECOUNTA": {
            return { ...state,isLoading: false, countA: action.countA};
        }
        case "CHANGECOUNTV": {
            return { ...state,isLoading: false, countV: action.countV};
        }
        default:
            return state;
    }
};
