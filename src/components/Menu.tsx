import React, { FC } from 'react';
import {NavLink} from "react-router-dom";

export const Menu: FC = () => {

    return <>
        <h1 className="h1-center">Вакансии для начинающих разработчиков</h1>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" id="menu">
                    <NavLink className="navbar-brand" to="/">Вакансии</NavLink>
                    <NavLink className="navbar-brand" to="/statistic">Статистика</NavLink>
                </div>
            </nav>
        </div>
    </>
}
