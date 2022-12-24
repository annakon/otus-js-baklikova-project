import React, { FC, useState } from 'react';
import { useDispatch } from "react-redux";
import { changeName } from "../store/profile/actions";

export const RadioButton: FC = () => {
    const [value, setValue] = useState('1');

    const dispatch = useDispatch();

    function changeValue(event : React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        dispatch(changeName(value));
    }

    return <>
        <label>
        <input type="radio" name="radio" value="1"
               checked={value === '1'}
               onChange={changeValue} />
            React
        </label>

        <label>
        <input type="radio" name="radio" value="2"
               checked={value === '2'}
               onChange={changeValue} />
            Angular
        </label>

        <label>
        <input type="radio" name="radio" value="3"
               checked={value === '3'}
               onChange={changeValue} />
            Vue
        </label>
    </>;
}
