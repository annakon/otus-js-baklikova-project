import { createStore, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import thunk from "redux-thunk";

export const store = createStore(profileReducer,applyMiddleware(thunk));

export type Store = ReturnType<typeof profileReducer>;
