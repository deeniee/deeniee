import { createSlice } from '@reduxjs/toolkit';

const isVisibleSlice = createSlice({
    name: 'change',
    initialState: true,
    reducers: {
        changeVisibility: (state) => {
            return !state;
        },
    },
});

export const { changeVisibility } = isVisibleSlice.actions; // 액션 값 내보내기

export default isVisibleSlice.reducer; // 리듀서 내보내기
