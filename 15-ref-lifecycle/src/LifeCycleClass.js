import React, { Component } from 'react';
import LifeCycleClassChild from './LifeCycleClassChild';

export default class LifeCycleClass extends Component {
    state = {
        number: 0,
        visible: true,
    };
    changeNumberState = () => {
        return this.setState({ number: this.state.number + 1 });
    };
    changeVisibleState = () => {
        return this.setState({ visible: !this.state.visible }); // !연산자로 토글 효과를 구현
    };
    render() {
        return (
            <>
                <div>부모 컴포넌트</div>
                <button onClick={this.changeNumberState}>PLUS</button>
                <span> </span>
                <button onClick={this.changeVisibleState}>ON / OFF</button>
                <p>|</p>
                {this.state.visible && (
                    <LifeCycleClassChild
                        number={this.state.number}
                    ></LifeCycleClassChild>
                )}
            </>
        );
    }
}
/** 단축평가
 * - 불필요한 평가를 건너뛰고 바로 반환하는 방법
 *
 * A && B // 논리곱 - 두 값 모두 "참"일 때, "참"을 반환
 * >>> A가 "참"일 때, B 반환
 * >>> A가 "거짓"일 때, B 평가x -> A 출력
 *
 * A || B // 논리합 - 두 값 중 하나라도 "참"일 때, "참"을 반환
 * >>> A가 "참"이면 B 평가x -> A 출력
 * >>> A가 "거짓"일 때, B 반환
 *
 * [공식문서내용]
 * (true) && anything // anything 반환
 * (false) && anything // (false)
 * (true) || anything // (true)
 * (false) || anything // anything 반환
 */
