// 이벤트 핸들링 실습2

import React, { Component } from 'react';

export default class TextColor extends Component {
    state = {
        text: '검정색 글씨',
        color: 'black',
    };

    changeToRed = () => {
        this.setState({ text: '빨간색 글씨', color: 'red' });
    };

    changeToBlue = () => {
        this.setState({ text: '파란색 글씨', color: 'blue' });
    };

    render() {
        return (
            <>
                <div>이벤트 핸들링 실습2</div>

                <h2 style={{ color: this.state.color }}>{this.state.text}</h2>
                <button onClick={this.changeToRed}>빨간색</button>
                <button onClick={this.changeToBlue}>파란색</button>
            </>
        );
    }
}
