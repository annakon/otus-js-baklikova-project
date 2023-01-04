import { createStore, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// The store now has the ability to accept thunk functions in `dispatch`
export const store = createStore(profileReducer, composedEnhancer)

export type Store = ReturnType<typeof profileReducer>;
