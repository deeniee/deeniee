import React, { useState, useRef } from 'react';
import './App.css';

export default function InputFocus() {
    const [postList, setPostList] = useState([]);
    const inputPosterRef = useRef();
    const inputTitleRef = useRef();

    // input 데이터 상태 관리
    const [inputPoster, setInputPoster] = useState('');
    const [inputTitle, setInputTilte] = useState('');

    // onChange 핸들러
    const handlePosterChange = (e) => {
        setInputPoster(e.target.value);
    };
    const handleTitleChange = (e) => {
        setInputTilte(e.target.value);
    };

    // post 추가 기능
    const addPost = () => {
        // input이 비어있을 땐 input focusing
        if (inputPoster === '' && inputTitle === '') {
            inputPosterRef.current.focus();
        } else if (inputPoster === '') {
            inputPosterRef.current.focus();
        } else if (inputTitle === '') {
            inputTitleRef.current.focus();
        } else {
            const newPostList = postList.concat({
                no: postList.length + 1,
                title: inputTitle,
                poster: inputPoster,
            });
            // postList 업데이트
            setPostList(newPostList);
            // input창 리셋
            setInputPoster('');
            setInputTilte('');
        }
    };

    return (
        <div className="Center">
            <p>ref 실습</p>
            <div className="Part1Style">
                Poster :{' '}
                <input
                    id="poster"
                    type="text"
                    value={inputPoster}
                    onChange={handlePosterChange}
                    ref={inputPosterRef}
                ></input>
                Title :
                <input
                    id="title"
                    type="text"
                    value={inputTitle}
                    onChange={handleTitleChange}
                    ref={inputTitleRef}
                ></input>
                <button onClick={addPost}>POST</button>
            </div>
            <table className="TableStyle">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>poster</th>
                    </tr>
                </thead>
                <tbody>
                    {postList.map((post, index) => (
                        <tr key={index}>
                            <td>{post.no}</td>
                            <td>{post.title}</td>
                            <td>{post.poster}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
