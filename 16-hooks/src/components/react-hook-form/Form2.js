import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        console.log('#Form submit succese! : ', data);
    };

    const onError = (err) => {
        console.log('#Form submit failed : ', err);
    };

    const username = watch('username');

    return (
        <div>
            <h1>React-hook-form library demo</h1>

            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label htmlFor="username">USERNAME</label>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    {...register('username', {
                        required: '이름은 필수 항목입니다',
                        minLength: {
                            value: 2,
                            message: '이름은 최소 2글자 이상 작성해주세요',
                        },

                        pattern: {
                            value: /^[a-zA-Z0_9_]{5,15}$/,
                            message:
                                '아이디는 영문, 숫자,. 밑줄(_)로 5자 이상 15자 이하로 작성해야 합니다',
                        },
                    })}
                ></input>
                {errors.username?.name}

                <br />
                <label htmlFor="email">EMAIL</label>
                <input
                    type="email"
                    placeholder="email"
                    id="email"
                    {...register('email', {
                        required: '이메일을 입력해주세요',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: '유효한 이메일 주소를 입력해주세요',
                        },

                        validate: {
                            useGmail: (v) =>
                                v.includes('gmail.com') ||
                                'Gmail로만 가능합니다',
                        },
                    })}
                ></input>
                <br />
                <label htmlFor="pwd">PASSWORD</label>
                <input
                    type="password"
                    placeholder="password"
                    id="pwd"
                    {...register('password')}
                ></input>
                <br />
                <button type="submit">SUBMIT</button>
            </form>
            <p>미리보기 : {username}</p>
        </div>
    );
}
