import React, { useState } from 'react';
import './App.css';

export default function Post() {
    const [postList, setPostList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [selectedOption, setSelectedOption] = useState('Poster');

    // input 데이터 상태 관리
    const [inputPoster, setInputPoster] = useState('');
    const [inputTitle, setInputTilte] = useState('');
    const [inputSearch, setInputSearch] = useState('');

    // onChange 핸들러
    const handlePosterChange = (e) => {
        setInputPoster(e.target.value);
    };
    const handleTitleChange = (e) => {
        setInputTilte(e.target.value);
    };
    const handleSearchChange = (e) => {
        setInputSearch(e.target.value);
    };
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    // post 추가 기능
    const addPost = () => {
        // input이 비어있을 땐 추가 불가능
        if (inputTitle === '' || inputPoster === '') {
            alert('Please fill in blank field');
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

    // search 기능
    const searchPost = () => {
        let filteredPosts = [];

        // input이 비어있을 땐 추가 불가능
        if (inputSearch === '') {
            alert('Please fill in blank field');
        } else {
            if (selectedOption === 'Poster') {
                filteredPosts = postList.filter((post) =>
                    post.poster
                        .toLowerCase()
                        .includes(inputSearch.toLowerCase()),
                );
            } else if (selectedOption === 'Title') {
                filteredPosts = postList.filter((post) =>
                    post.title
                        .toLowerCase()
                        .includes(inputSearch.toLowerCase()),
                );
            }
        }
        // searchList 업데이트
        setSearchList(filteredPosts);

        // input창 리셋
        setInputSearch('');
    };

    // show all 기능
    const showAllPost = () => {
        setSearchList(postList);
    };

    // 조건에 따라 텍스트 변경
    const tableName = () => {
        if (searchList.length === 0) {
            return 'No search results'; // 검색 결과가 없을 때
        } else {
            return 'Search results'; // 검색 결과가 있을 때
        }
    };

    return (
        <div className="Center">
            <div>실습 3번 & 4번</div>

            <div className="Part1Style">
                <label id="poster">Poster : </label>
                <input
                    id="poster"
                    type="text"
                    value={inputPoster}
                    onChange={handlePosterChange}
                ></input>
                <label id="title">Title : </label>
                <input
                    id="title"
                    type="text"
                    value={inputTitle}
                    onChange={handleTitleChange}
                ></input>
                <button onClick={addPost}>ADD</button>
            </div>

            <div className="Part2Style">
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="Poster">Poster</option>
                    <option value="Title">Title</option>
                </select>
                <input
                    type="text"
                    placeholder="Enter your search term"
                    style={{ width: '204px' }}
                    value={inputSearch}
                    onChange={handleSearchChange}
                ></input>
                <button onClick={searchPost}>SEARCH</button>
                <button onClick={showAllPost}>SHOW ALL</button>
            </div>

            <div className="SubTitle">Posts</div>
            <table className="TableStyle">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>TITLE</th>
                        <th>POSTER</th>
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

            <div className="SubTitle">{tableName()}</div>
            {searchList.length > 0 && (
                <table className="TableStyle">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>TITLE</th>
                            <th>POSTER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchList.map((post, index) => (
                            <tr key={index}>
                                <td>{post.no}</td>
                                <td>{post.title}</td>
                                <td>{post.poster}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
