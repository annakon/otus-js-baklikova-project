import React, { FC } from 'react';
import {RadioButton} from "./RadioButton";
import { useSelector} from "react-redux";
import { selectName } from "../store/profile/selectors";
import {Loading} from "./loading";

export const DisplayPage: FC = () => {

    //const name = useSelector(selectName);

    return <>
        <h1>Вакансии для начинающих разработчиков</h1>
        <RadioButton></RadioButton>
        <Loading></Loading>
    </>
}
