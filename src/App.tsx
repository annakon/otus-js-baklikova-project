import React from 'react';
import {DisplayPage} from "./components/DisplayPage";
import {VacancyInfo} from "./components/VacancyInfo";
import { Provider } from "react-redux";
import { store } from "./store/store";
import {Route,Routes} from "react-router-dom";

const App= () => {
    if(PRODUCTION){
      return <Provider store={store}>
            <Routes>
                <Route path={`${PREFIX}/`} element={<DisplayPage/>}/>
                <Route path= {`${PREFIX}/vacancies/:id`} element={<VacancyInfo/>}/>
            </Routes>
      </Provider>;}
    return  <Provider store={store}>
            <Routes>
                <Route path="/" element={<DisplayPage/>}/>
                <Route path= "/vacancies/:id" element={<VacancyInfo/>}/>
            </Routes>
        </Provider>;
}

export default App;


