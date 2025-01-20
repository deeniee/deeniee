import { createSlice } from '@reduxjs/toolkit';

const isVisibleSlice = createSlice({
    name: 'change',
    initialState: true,
    reducers: {
        changeVisibility: (state) => {
            return !state;
        },
        // changeVisibility: (state) => !state, // immer 라이브러리를 활용, 간단하게 작성
    },
});

export const { changeVisibility } = isVisibleSlice.actions; // 액션 값 내보내기

export default isVisibleSlice.reducer; // 리듀서 내보내기
