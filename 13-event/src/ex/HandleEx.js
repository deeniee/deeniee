// 이벤트 핸들링 실습1

import React, { Component } from 'react';

export default class HandleEx extends Component {
    state = {
        line: 'Hello World!',
    };

    changeLine = () => {
        this.setState({ line: 'Goodbye World!' }); // 상태를 업데이트하는 방법
    };

    render() {
        return (
            <>
                <div>이벤트 핸들링 실습1</div>

                <h2>{this.state.line}</h2>
                <button onClick={this.changeLine}>change</button>
            </>
        );
    }
}
