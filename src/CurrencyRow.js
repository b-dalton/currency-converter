import React from 'react';

export default function CurrencyRow(props) {
    const {
        currencyOptions
    } = props
    return (
        <div>
            <input type='number' className='input'></input>
            <select>
                <option value='Hi'>Hi</option>
            </select>
        </div>
    )
}
