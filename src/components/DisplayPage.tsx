import React, { FC } from 'react';
import {RadioButton} from "./RadioButton";
import {Loading} from "./loading";

export const DisplayPage: FC = () => {

    //const name = useSelector(selectName);

    return <>
        <h1 className="h1-center">Вакансии для начинающих разработчиков</h1>
        <div className="radio-center"><RadioButton></RadioButton></div>
        <Loading></Loading>
        </>
}
