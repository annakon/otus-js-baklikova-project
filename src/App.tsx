import React from 'react';
import {DisplayPage} from "./components/DisplayPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App= () => {
    return <Provider store={store}>
        <DisplayPage></DisplayPage>
    </Provider>;
}

export default App;


