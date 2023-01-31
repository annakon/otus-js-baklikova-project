import React, { FC } from 'react';
import {RadioButton} from "./RadioButton";
import {Loading} from "./loading";
import {Menu} from "./Menu";

export const DisplayPage: FC = () => {

    return <>
        <Menu></Menu>
        <div className="radio-center"><RadioButton></RadioButton></div>
        <Loading></Loading>
        </>
}
