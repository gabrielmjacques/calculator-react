import React from 'react'

export default function Screen( props )
{
    return (
        <div className='Screen'>
            <input type='text' value={ props.screenValue } readOnly />
        </div>
    )
}