import React from 'react';

export default function Input({ setData }) {
    const handleInput = (e) => {
        setData((d) => {
            return { ...d, content: e.target.value };
        });
    };

    return (
        <div>
            Text :
            <input type="text" onChange={handleInput} />
        </div>
    );
}
