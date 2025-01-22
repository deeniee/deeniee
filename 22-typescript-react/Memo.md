1. (신규) 프로젝트 생성 (+TS 템플릿)

    # npx create-react-app 프로젝트이름 --template typescript

    (추가) 기존 프로젝트에 TS 템플릿 추가

    # npx install typescript @types/react @types/react-dom @types/node

2. 불필요한 파일 삭제

3. tsconfig.json 생성

    # npm tsc --init

4. 패키지 추가 설치

    # npm i @types/react @types/react-dom @types/node

-   1. 프로젝트 생성 > 중간에 멈춤 (실패)
    2. 리액트 할 때 처럼 불필요한 파일 삭제
    3. 중간에 설치가 실패되면서 tsconfig.json이 생성되지 않아 직접 생성해야함
       ㄴ 생성 후, **"jsx" : “react-jsx”** 으로 수정
    4. 중간에 설치가 실패되면서 패키지가 덜 설치됨
       ㄴ **npm i @types/react @types/react-dom** 패키지 추가 설치
