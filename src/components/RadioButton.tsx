import React, { useState } from 'react';

function RadioButton() {
    const [value, setValue] = useState('1');

    function changeValue(event : React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
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

export default RadioButton;
