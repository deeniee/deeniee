import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPrac() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('#폼 제출 완료! : ', data);
    };

    const onError = (err) => {
        console.log('#폼 제출 실패 : ', err);
    };

    return (
        <div>
            <h1>react hook form 실습</h1>
            <br />
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    {...register('username', {
                        required: {
                            value: true,
                            message: '이름은 필수 항목입니다',
                        },
                    })}
                />
                {errors.username?.message}
                <br />
                <input
                    type="text"
                    placeholder="age"
                    id="age"
                    {...register('age', {
                        pattern: {
                            value: /^\d+$/,
                            message: '0 이상의 숫자만 입력이 가능합니다',
                        },
                    })}
                />{' '}
                {errors.age?.message}
                <br />
                <button type="submit">제출</button>
            </form>
        </div>
    );
}
