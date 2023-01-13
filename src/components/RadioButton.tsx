import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import { changeName, loading, success, error } from "../store/profile/actions";
import {store} from "../store/store";

export const RadioButton: FC = () => {
    const [value, setValue] = useState('React');

    const dispatch = useDispatch();

     function loadData() {
        // put your code here
        return async (dispatch: typeof  store.dispatch, getstate: typeof store.getState)=>
        {
            dispatch(loading());
            fetch(`https://api.hh.ru/vacancies?text="${getstate().name} AND junior"&area=1`)
                .then((response) => response.json())
                .then((data: any) => dispatch(success(data)))
                .catch((err: Error) => dispatch(error(err)));
        }
    }

    useEffect(() => {
        dispatch(loadData() as never);
    }, []);
    function changeValue(event : React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        dispatch(changeName(event.target.value));

        dispatch(loadData() as never);
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
