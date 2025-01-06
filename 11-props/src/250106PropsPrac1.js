import React, { Component } from 'react';

// Props 실습1
class ClassComponent1 extends Component {
    static defaultProps = {
        food: 'Taco',
    };

    render() {
        const { food } = this.props;

        return (
            <>
                <div>
                    My favorite food is{' '}
                    <div style={{ color: 'red' }}>{food}</div>
                </div>
            </>
        );
    }
}

export default ClassComponent1;
