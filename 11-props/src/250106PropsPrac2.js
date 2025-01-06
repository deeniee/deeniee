import './250106PropsPrac2.css';
import React, { Component } from 'react';

// Props 실습2
const FunctionComponent1 = () => {
    const title = '아몬드';
    const author = '손원평';
    const price = 14000;
    const type = '소설';

    return (
        <div className="Book-Container">
            <h1 className="Book-ThisWeek">이번주 베스트셀러</h1>
            <img
                src="https://i.namu.wiki/i/JrU9RrcQdK0Ga8wjM-KiJO0hZv2_jLBimOwVKck_SQGKI_NMPyaKJix0I4N-wtG1vLBsT4eYuYc1S7BR13slIWcq6tei2DnlRo9V3VGLgFvTqrBw9_O4DmCVFfTm_bFgFDgTt_43r5JIMwUXDCE1wA.webp"
                alt="book cover"
            />
            <div className="Align-left">
                <h2>{title}</h2>
                <div>저자 : {author}</div>
                <div>판매가 : {price}</div>
                <div>구분 : {type}</div>
            </div>
        </div>
    );
};

export default FunctionComponent1;
