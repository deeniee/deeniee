// 이벤트 핸들링 실습 3

import React, { Component } from 'react';

export default class HideShow extends Component {
    state = {
        opacity: 100,
        text: 'hide',
    };

    // 텍스트 숨기기
    hideText = () => {
        this.setState({ opacity: 0, text: 'show' });
    };

    // 텍스트 보이기
    showText = () => {
        this.setState({ opacity: 100, text: 'hide' });
    };

    render() {
        return (
            <>
                <div>이벤트 핸들링 실습 3</div>

                <h2 style={{ opacity: this.state.opacity }}>안녕하세요</h2>

                <button
                    onClick={
                        this.state.text === 'hide'
                            ? this.hideText
                            : this.showText
                    }
                >
                    {this.state.text}
                </button>
            </>
        );
    }
}
