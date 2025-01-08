import React, { useState } from 'react';
import './App.css';

export default function Post() {
    // input 데이터 상태 관리
    const [inputPoster, setInputPoster] = useState('');
    const [inputTitle, setInputTilte] = useState('');

    // post 추가 기능
    const addPost = () => {};

    return (
        <>
            <div>실습 3번</div>

            <div className="Part1Style">
                <label id="poster">Poster : </label>
                <input id="poster" type="text" value={inputPoster}></input>
                <label id="title">Title : </label>
                <input id="title" type="text" value={inputTitle}></input>
                <button>ADD</button>
            </div>
            <br />
            <div className="Part2Style">
                <select>
                    <option>Poster</option>
                </select>
                <input
                    type="text"
                    placeholder="Enter your search term"
                    style={{ width: '317px' }}
                ></input>
                <button>SEARCH</button>
            </div>
            <br />
            <table className="TableStyle">
                <tr>
                    <th className="ThStyle">No.</th>
                    <th className="ThStyle">TITLE</th>
                    <th className="ThStyle">POSTER</th>
                </tr>
            </table>
        </>
    );
}
