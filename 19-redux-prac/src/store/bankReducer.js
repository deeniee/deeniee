// /src/store/bankReducer.js 파일
const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';

// 액션 생성자에서 payload를 포함시켜야 함
export const deposit = (amount) => ({ type: DEPOSIT, payload: amount });
export const withdraw = (amount) => ({ type: WITHDRAW, payload: amount });

const initialState = 0;

const bankReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case DEPOSIT: // 입금
            return state + payload; // deposit 액션의 payload는 입금액
        case WITHDRAW: // 출금
            return state - payload; // withdraw 액션의 payload는 출금액
        default:
            return state;
    }
};

export default bankReducer;
