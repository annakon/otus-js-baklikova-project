import React, { useState } from 'react';

function RadioButton() {
    const [value, setValue] = useState('1');

    function chengeValue(event : React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    return <div>
        <input type="radio" name="radio" value="1"
               checked={value === '1'}
               onChange={chengeValue} />

        <input type="radio" name="radio" value="2"
               checked={value === '2'}
               onChange={chengeValue} />

        <input type="radio" name="radio" value="3"
               checked={value === '3'}
               onChange={chengeValue} />
    </div>;
}

export default RadioButton;
