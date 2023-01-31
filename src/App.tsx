import React from 'react';
import {DisplayPage} from "./components/DisplayPage";
import {VacancyInfo} from "./components/VacancyInfo";
import { Provider } from "react-redux";
import { store } from "./store/store";
import {Route,Routes} from "react-router-dom";
import {Statistic} from "./components/Statistic";

const App= () => {
    if(PRODUCTION){
      return <Provider store={store}>
            <Routes>
                <Route path={`${PREFIX}/`} element={<DisplayPage/>}/>
                <Route path= {`${PREFIX}/vacancies/:id`} element={<VacancyInfo/>}/>
                <Route path= {`${PREFIX}/statistic`} element={<Statistic/>}/>
            </Routes>
      </Provider>;}
    return  <Provider store={store}>
            <Routes>
                <Route path="/" element={<DisplayPage/>}/>
                <Route path= "/vacancies/:id" element={<VacancyInfo/>}/>
                <Route path="/statistic" element={<Statistic/>}/>
            </Routes>
        </Provider>;
}

export default App;


