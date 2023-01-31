import React, { FC } from 'react';
import {NavLink} from "react-router-dom";

export const Menu: FC = () => {

    const prod_pefix=PRODUCTION?PREFIX:'';

    return <>
        <h1 className="h1-center">Вакансии для начинающих разработчиков</h1>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" id="menu">
                    <NavLink className="navbar-brand" to={`${prod_pefix}/`}>Вакансии</NavLink>
                    <NavLink className="navbar-brand" to={`${prod_pefix}/statistic`}>Статистика</NavLink>
                </div>
            </nav>
        </div>
    </>
}
