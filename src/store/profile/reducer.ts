import { Reducer } from "redux";
import { CHANGE_NAME } from "./actions";
import { ProfileActions } from "./types";

interface State {
    name: string;
}

const initialState: State = {
    name: "react",
};

export const profileReducer: Reducer<State, ProfileActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CHANGE_NAME: {
            return { ...state, name: action.name };
        }
        default:
            return state;
    }
};
