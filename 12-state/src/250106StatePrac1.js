import React, { Component } from 'react';

export default class CounterClass1 extends Component {
    state = {
        count: 0,
    };

    render() {
        const { count } = this.state;

        return (
            <>
                <div>State 실습</div>
                <h1>Count : {this.state.count}</h1>
                <button
                    onClick={() => {
                        this.setState({ count: this.state.count + 2 });
                    }}
                >
                    +2
                </button>
                <button
                    onClick={() => {
                        this.setState({ count: this.state.count - 1 });
                    }}
                >
                    -1
                </button>
            </>
        );
    }
}
