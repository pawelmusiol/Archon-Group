import React from 'react';

const Input = ({ type, placeholder, value, setValue, onClick, className, textarea, cols, rows }) => {
    return (
        <>
        {!textarea ?
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
            onClick={onClick}
        />
        :
        <textarea 
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        onClick={onClick}
        cols={cols}
        rows={rows}
        />
        }
        </>
    )
}

export default Input