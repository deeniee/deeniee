// 클래스
// -es6 도입하여 클래스 기반 언어처럼 사용 가능.

// 클래스 기본 문법
// #1. class : 클래스를 정의할 때 사용하는 키워드
class House {
    // #2. constructor : 클래스의 생성자
    // - 객체를 생성할 때 자동으로 호출되며 초기화 작업을 수행
    constructor(year, name, window) {
        // #3. this : 클래스 내부에서 현재 인스턴스를 참조하는 객체
        // - 인스턴스 속성, 메소드애 접근할 때 사용
        // - 현재 인스턴스(this)에 속성(name)을 추가하고, 그 값을 매개변수 name으로 설정하는 것.
        // - 가독성을 위해 이름을 동일하게 설정할 뿐.
        this.year = year;
        this.name = name;
        this.window = window;
    }
    // #4. 메소드 : 클래스 내부에 정의된 함수
    // - 해당 클래스의 인스턴스에서 호출 가능.
    getAge() {
        console.log(`${this.name}는 건축한지 ${2024 - this.year}년 됐어요. `);
    }
    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다. `);
    }
}

// #5. 인스턴스 : 클래스로부터 생성된 실제 객체 - new 키워드 사용하여 생성
// 클래스 - 설계도
// 인스턴스 - 설계도로 만들어진 "실제 집"
// > 각각 독립적인 객체 (= 각자 자신만의 this를 가짐)
const house1 = new House(2000, 'Doosan', 8);
// 클래스를 이용해 인스턴스를 생성시 constructor에 선언된 매개변수대로 값을 지정해야힘/
console.log(house1); // House {year: 2000, name: 'Doosan', window: 8}
console.log(typeof house1); // object
console.log(house1.year); // 2000
house1.getAge(); // Doosan는 건축한지 24년 됐어요.
house1.getWindow(); // Doosan의 창문은 8개 입니다.

const house2 = new House(2020, 'hyundai', 10);
console.log(house2); // House {year: 2020, name: 'hyundai', window: 10}

////////////////////////
// 클래스의 상속
// - 상속을 통해 다른 클래스의 기능을 재사용 가능하다.
// - 'extends' 키워드를 사용하여 상속 구현
class Apt extends House {
    constructor(year, name, window, floor, windowMaker) {
        // #6. super() : 부모 클래스의 생성자를 호출할 때 사용.
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name} 아파트는 ${this.floor}층이다. 창문의 개수는 ${this.window}개이다.`;
    }
    // #7. Override : 부모의 메소드와 같은 함수를 재정의 할 때
    // - 부모 클래스에서 정의된 메소드를 자식 클래스에서 "새롭게 재정의"히거나 "변경"하는 것을 의미.
    // - 주로, 부모 클래스에서 제공한 기본 동작을 "자식 클래스의 특성에 맞게 수정"할 때 사용.

    // ** 규칙
    // - 메소드 이름, 매개변수 리스트가 부모 클래스와 "동일"해야함.
    getWindow() {
        return `${this.name}의 창문 ${this.window}개는 창문 시공업체 ${this.windowMaker}에서 만들었습니다.`;
    }
}
const apt1 = new Apt(2022, '래미안', 18, 12, '대광');
console.log(apt1); // Apt {year: 2022, name: '래미안', window: 18, floor: 12, windowMaker: '대광'}
console.log(apt1.getAptInfo()); // 2022년에 지어진 래미안 아파트는 12층이다. 창문의 개수는 18개이다.
console.log(apt1.getWindow()); // 래미안의 창문 18개는 창문 시공업체 대광에서 만들었습니다.
