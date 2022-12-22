import React, { FC, useState } from 'react';
import {RadioButton} from "./RadioButton";

export const DisplayPage: FC = () => {

    return <>
        <h1>Вакансии для начинающих разработчиков</h1>
        <RadioButton></RadioButton>
        <p>{}</p>
    </>
}
