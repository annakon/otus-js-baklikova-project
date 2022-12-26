import React, { FC, useState } from 'react';
import { useDispatch } from "react-redux";
import { changeName } from "../store/profile/actions";

export const RadioButton: FC = () => {
    const [value, setValue] = useState('React');

    const dispatch = useDispatch();

    function changeValue(event : React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        dispatch(changeName(value));
    }

    return <>
        <label>
        <input type="radio" name="radio" value="React"
               checked={value === 'React'}
               onChange={changeValue} />
            React
        </label>

        <label>
        <input type="radio" name="radio" value="Angular"
               checked={value === 'Angular'}
               onChange={changeValue} />
            Angular
        </label>

        <label>
        <input type="radio" name="radio" value="Vue"
               checked={value === 'Vue'}
               onChange={changeValue} />
            Vue
        </label>
    </>;
}
