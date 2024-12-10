let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// 1. 순서대로 색상 전환
function changeColor() {
    let currentClass = $('div').attr('class'); // 현재 클래스 가져오기
    let currentIndex = colors.indexOf(currentClass); // 현재 인덱스 0, red

    // #1. 다음 색상으로 전환
    let nextClass =
        currentIndex === colors.length - 1
            ? colors[0]
            : colors[currentIndex + 1];

    //#2. class 교체하기
    $('div').removeClass(currentClass).addClass(nextClass);
}

// 2. 랜덤으로 색상 전환 (같은 값이 나올 수 있음)
// function changeColor() {
//     let randomIndex = Math.floor(Math.random() * colors.length); // 0<= randomIndex < 6
//     let nextClass2 = colors[randomIndex];
//     $('div').removeClass().addClass(nextClass2);
//     console.log(nextClass2);
// }

// 해설 (switchClass())
// SwitchClass(제거할 클래스, 추가할 클래스, [duration])
// - 애니메이션 효과
// - jQuery 메서드가 아님.
// - jQuery UI 라이브러리 필요.

// function changeColor() {
//     let currentClass = $('div').attr('class'); // 현재 클래스 가져오기
//     console.log(currentClass); // red

//     let currentIndex = colors.indexOf(currentClass);
//     console.log(currentIndex); // 0

//     // if (currentIndex === colors.length - 1) {
//     //     $('div').switchClass(currentClass, colors[0]);
//     // }

//     currentIndex === colors.length - 1
//         ? $('div').switchClass(currentClass, colors[0], 1000)
//         : $('div').switchClass(currentClass, colors);
// }
