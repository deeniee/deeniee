import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    // #1. useForm Hook 호출
    // > 폼 관리에 필요한 메소드와 상태 가져옴

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    /**
     * - register : 입력 필드를 폼 상테데 등록하는 메소드. 즉, input 할당, value 변경 감지
     * - handleSubmit : 폼 제출 시 호출할 함수
     * - watch : 특정 입력 필드의 변화를 실시간으로 감지
     * - formState: { errors }: 폼 상태 객체, 유효성 검증 오류가 발생한 필드 정보를 담고 있음
     */

    ////////////////////////////////////////////////
    /** #4. formState 객체 활용
     * formState : 폼의 상태를 나타내는 객체.
     * - 폼의 유효성 검사 상태, 제출 상태, 에러 정보 등.. 제공함
     *
     * [제공하는 속성]
     * - errors : 유효성 검사 에러 정보를 담고 있는 객체
     * - isDirty : 폼이 수정 되었는지 여부.
     * - isSubmitting : 모든 필드가 유효한지 여부 (제출 시작 : ture / 제출 완료 : false)
     * - isSubmitted : 폼이 한 번이라도 제출되었는지 여부.
     * 기타 등등..
     */

    /** #3-2. Submit 콜백함수 지정
     *
     * handleSubmit(funcA, [funcB]) - 두개의 함수를 받음
     * funcA(필수) : 유효할 때 실행 >>> 수집된 폼 데이터를 인수로 받음
     * funcB(선택) : 유효하지 않을 때 실행 >> 에러 정보 객체(errors)를 인수로 받음
     */

    const onSubmit = (data) => {
        console.log('#Form submit succese! : ', data);
    };

    const onError = (err) => {
        console.log('#Form submit failed : ', err);
    };

    // console.log('register 메소드 >>> ', register());
    // console.log('errors >>> ', errors);
    // console.log('watch >>> ', watch('username'));

    // #5. watch 사용
    const username = watch('username');

    return (
        <div>
            <h1>React-hook-form library demo</h1>
            {/*     #3-1. handleSubmit 메소드 지정
                    - 제출 시 입력된 데이터 수집 및 등록된 모든 입력 필드 유효성 검사 실행
                    - 통과 >>> 콜백함수(onSubmit) 실행
                    - 실패 >>> errors 객체에 에러 정보 저장, 콜백함수 미실행
            */}

            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label htmlFor="username">USERNAME </label>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    // #2. register()로 폼과 input 연결
                    /**
                     * register("필드명", {유효성 검사 옵션})
                     * - 필드명 작성은 필수이며, 폼 데이터를 수집할 때 객체의 키(key)로 사용됨.
                     * - required : 필수 사용 여부
                     * - min/max length : 최소/최대 입력 길이 설정
                     * - pattern : 정규식 검증
                     * - validate : 커스텀 검증 로직
                     */
                    {...register('username', {
                        required: '이름은 필수 항목입니다',
                        minLength: {
                            value: 2,
                            message: '이름은 최소 2글자 이상 작성해주세요',
                        },
                        // value : 유효성 검사의 기준 값 설정.
                        // message : 유효성 검증 실패 시, 에러 메세지를 설정
                        pattern: {
                            value: /^[a-zA-Z0_9_]{5,15}$/,
                            message:
                                '아이디는 영문, 숫자,. 밑줄(_)로 5자 이상 15자 이하로 작성해야 합니다',
                        },
                        // /로 감싸기 : 정규식 객체
                        // ^ : 문자열 시작 / $ : 문자열 끝
                    })}
                ></input>
                {errors.username?.message}
                {/* #4-2. 폼 상태 객체 formState 활용 
                    이 표현은 *조건부 렌더링*과 *옵셔널 체이닝*을 활용하요 폼 필드의 오류 메세지를 표시하는 방법
                    
                    errors 
                    > 유효성 검사가 "실패한 경우에만" 해당 필드에 오류 메세지가 저장됨

                    "errors.username" > username 필드에 대한 오류 정보가 담긴 객체

                    **옵셔널 체이닝 연산자** ?.
                    JS에서 객체의 속서에 접근할 때 해당 속성이 존재하는지 확ㅇ니하고, 없을 경우 undefined를 반환하는 연산자
                */}

                <br />
                <label htmlFor="email">EMAIL </label>
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
                        // \S+ : 공백이 아닌 문자를 1개 이상 반복해라.
                        validate: {
                            useGmail: (v) =>
                                v.includes('gmail.com') ||
                                'Gmail로만 가능합니다',
                        },
                        // validate 옵션
                        // - 기본 제공되는 유효성 검사 옵션 외에 . 더복잡한 유효성 검사를 직접 정의할 때 사요
                        // - 검증 "함수"를 받으며, 검증 결과를 반환함 (성공 = true / 실패 = false)
                        // - 객체로 사용될 경우, 여러 개의 검증 조건 설정 가능
                        //  (매개변수) : 입력 필드의 현재 값을 가져옴.
                    })}
                ></input>
                <br />
                <label htmlFor="pwd">PASSWORD </label>
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

/** #2-2 Q) ...(?)register 왜 사용할까?
 * register 메소드는 input 요소와 연결하기 위한 속성들로 구성된 "객체"를 반환함.
 * ...연산자를 사용하여 한 번에 모든 속성 props를 전달 > 모두 가져오기 위헤 사용
 *
 * 반환객체 ex) {name: undefined, onChange: ƒ, onBlur: ƒ, ref: ƒ}
 * {name : undefined
    onBlur : async event => {…}
    onChange : async event => {…}
    ref : ref => {…}}
 */

////////////////////////////////////////////////

/** 일반 폼 작성과 라이브러리의 차이
 
 * [일반 폼]
 * - 각 입력 필드의 상태를 useState로 관리해야 함
 *   ㄴ 모든 입력 값의 상태를 관리하고 값이 바뀔 때마다 전체 컴포넌트가 리렌더링될 수 있음
 * - 검증 로직을 직접 작성해야함 (=유효성 검사)
 * - 폼 제출 시, 각 입력 필드의 상태를 모아서 폼 데이터를 수집해야함
 * - 간단한 폼 작성에 적합
 
 * [라이브러리]
 * - 코드의 간결화
 * - 비제어 컴포넌트 / 필요한 경우에만 리렌더링
 *   ㄴ 입력 필드 변경 시 전체 컴포넌트를 리렌더링 하지 않고 필요한 필드만 리렌더링함
 *   ㄴ 리렌더링 최소화로 성능 개선
 * - 다양한 검증 규칙 쉽게 설정
 * - 'handleSubmit' 하나로 모든 폼 데이터를 쉽게 관리
 *   ㄴ 폼 제출 시 자동으로 입력 필드를 수집하여 하나의 객체로 만들어주기 때문에 데이터를 수동으로 관리할 필요 없음
 * - 복잡하고 대규모인 폼 작성에 적합
 */

/** 제어 vs 비제어 컴포넌트
 
 * 제어 컴포넌트
 * - react 상태(state)로 값을 관리하는 컴포넌트
 * - 입력 필드의 값이 useState와 같은 상태 변수에 저장되고, 상태 변경에 따라 리렌더링됨
 * - 입력값을 실시간으로 제어할 수 있어 동적인 폼 처리에 유리함
 
 * 비제어 컴포넌트
 * - DOM 상태를 직접 참조하여 값을 관리하는 컴포넌트
 * - ref를 통해 입력값을 읽고, 폼데이터를 빠르게 수집할 때 유용
 * - 리렌더링이 적어 성능이 더 좋을 가능성이 있음
 */

/** React Hook Form (RHF)
 * - 비제어 컴포넌트 기반 동작
 * - 폼 필드가 업데이트 될 때마다 전체 폼이 리렌더링 되지 않도로고 성능 최적화
 * - 필요할 때만 폼 필드의 상태를 업데이트하여 불필요한 렌더링을 줄이고,
 * - 결과적으로 애플리케이션의 성능응 향상시켜줌
 * - 내부적으로 **ref 속성을 통해 DOM 요소에 접근하여 값 변화를 감지
 */
