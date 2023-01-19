import React, { FC } from 'react';
import {useParams} from "react-router-dom";

export const VacancyInfo: FC = () => {

    const { id } = useParams();

    return <>
        <h1>Вакансия</h1>
        <div>{id}</div>
    </>
}
