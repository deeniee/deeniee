import React, { useState } from 'react';

export default function Input() {
    const [info, setInfo] = useState([
        { id: 1, name: 'Coddie', email: 'cozycoddie@gmail.com' },
        { id: 2, name: 'Sohee Yoon', email: 'shyoon123@gmail.com' },
    ]);

    // input 데이터 상태 관리
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const addInfo = (e) => {
        // 값이 없을 땐 등록되지 않게 하기
        if (inputName.trim().length === 0) {
            return;
        } else if (inputEmail.trim().length === 0) {
            return;
        }

        // 입력된 값 받아 등록하기
        const newInfo = info.concat({
            name: inputName,
            email: inputEmail,
        });
        setInfo(newInfo);
        setInputName('');
        setInputEmail('');
    };

    // Enter로도 입력 가능하게 하기
    const handleKeyPress = (e) => {
        // 한글 입력 시, 두번 입력되는 상황 방지
        if (e.nativeEvent.isComposing) return;

        if (e.key === 'Enter') {
            addInfo();
        }
        if (e.keyCode === 13) {
            addInfo();
        }
    };

    // 더블클릭으로 삭제
    const deleteInfo = (targetName) => {
        const newInfo = info.filter((item) => item.name !== targetName);
        setInfo(newInfo);
    };

    return (
        <>
            <div>map 실습 1 & 2</div>

            <input
                placeholder="name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <input
                placeholder="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <button onClick={addInfo}>add</button>

            <div>
                <h3>information</h3>
                <ul>
                    {info.map((value, index) => (
                        <li
                            key={index}
                            onDoubleClick={() => deleteInfo(value.name)}
                        >
                            {value.name} : {value.email}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
