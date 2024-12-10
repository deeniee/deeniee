// val() - value
function getValue() {
    // js
    // const inputVal = document.querySelector('input').value;
    // alert(inputVal);

    // jQuery
    const value = $('input').val();
    alert(value);
}

function setValue() {
    // js
    // document.querySelector('input').value = '하이!';

    // jQuery
    $('input').val('하이하이!');
}

// css()
function changeCssJs() {
    const span = document.querySelector('span');
    span.style.fontSize = '20px'; // 인라인 방식
    span.style.color = 'red';
}

function changeCssJquery() {
    // case1
    // $('span').css('font-size', '40px'); // css 스타일
    // $('span').css('color', 'blue');

    // case2 - css 여러 속성 한번에 적용
    $('span').css({
        fontSize: '40px', // 모든 span에 대해 폰트 크기 변경
        color: 'blue', // 모든 span에 대해 폰트 색상 변경
    });
}

function getCssJquery() {
    // js
    // console.log(document.querySelector('span').style.color);
    // style 객체는 인라인 스타일에 설정된 값만 가져올 수 있음.

    // jQuery
    console.log($('span').css('color'));
    // .css() 메서드는 브라우저에게 계산된 스타일 값을 반환.
    // 계산된 스타일을 반환하므로, 인라인 스타일뿐만 아니라 모든 적용된 스타일 정보를 가져 올 수 있음.
    // 반환 값은 대부분 RGB형식.
}

// attr()
function changeAttrJs() {
    const a = document.querySelector('a');
    // a.setAttribute('href', 'https://www.naver.com');
    a.href = 'https://www.naver.com';
}

function changeAttrJquery() {
    $('a').attr('href', 'https://www.daum.net/');
}

// text()
function changeTextJs() {
    const p = document.querySelector('.p-text');
    p.innerText = 'js로 텍스트 변경';
}

function changeTextJquery() {
    $('.p-text').text('jQuery로 텍스트 변경');
}

// html()
function changeHtmlJs() {
    const p = document.querySelector('.p-html');
    p.innerHTML = '<h3>javascript</h3>';
}

function changeHtmlJquery() {
    $('.p-html').html('<h3>jQuery</h3');
}

////////////////
//// 요소 추가하기
//append()
function addAppendJs() {
    const colors = document.querySelector('.colors');
    const li = document.createElement('li');
    li.innerText = '마지막 자식으로 추가된 요소 / js 활용';
    colors.append(li);
}
function addAppendJquery() {
    $('.colors').append('<li>마지막 자식으로 추가된 요소 / jQuery 활용</li>');
}

//prepend()
function addPrependJs() {
    const colors2 = document.querySelector('.colors');
    const li = document.createElement('li');
    li.innerText = '맨 처음 자식으로 추가된 요소 / js 활용';
    colors2.prepend(li);
}

function addPrependJquery() {
    $('.colors').prepend('<li>맨 처음 자식으로 추가된 요소 / jQuery 활용</li>');
}

// before()
function addBeforeJs() {
    const colors3 = document.querySelector('.colors');
    const li = document.createElement('li');
    li.innerText = '이전 형제로 추가된 요소 / js 활용';
    colors3.before(li);
}
function addBeforeJquery() {
    $('.colors').before('<li>이전 형제로 추가된 요소 / jQuery 활용</li>');
}

//// quiz
function addBeforeJs() {
    const green = document.querySelector('.green');
    const li = document.createElement('li');
    li.innerText = 'green 클래스를 가진 요소의 이전 형재로 추가';
    li.style.color = 'blue';
    green.before(li);
}
function addBeforeJquery() {
    $('.green').before(
        '<li style="color: blue">green 클래스를 가진 요소의 이전 형재로 추가</li>',
    );
}

// after()
function addAfterJs() {
    const colors4 = document.querySelector('.colors');
    const li = document.createElement('li');
    li.innerText = '이후 형제로 추가된 요소 / js 활용';
    colors4.after(li);
}
function addAfterJquery() {
    $('.colors').after('<li>이후 형제로 추가된 요소 / jQuery 활용</li>');
}

////////////////
//// 요소 삭제하기
// remove()
function removeJs() {
    const li2 = document.querySelector('#li2');
    li2.remove();
}

function removeJquery() {
    $('#li2').remove();
}

// empty()
function emptyJs() {
    const nums = document.querySelector('ul.nums');
    nums.innerHTML = '';
}

function emptyJquery() {
    $('ul.nums').empty();
}

////////////////
//// 요소 탐색하기
// 부모 찾기
function findParent() {
    console.log(document.querySelector('.child2').parentNode); // 모든 부모 노드 가능
    console.log(document.querySelector('.child2').parentElement); // 부모 '요소'인 것만 가능
    console.log(document.querySelector('html').parentNode); // 부모가 document면 #document(요소가 아님) 값 출력 가능
    console.log(document.querySelector('html').parentElement); // 부모가 document면 null 값 출력 // 모든 노드가 모든 요소가 아니기 때문
}

// 조상 찾기
function findParents() {
    // js는 부모의 부모, 부모의 부모의 부모...는 찾을 수 있지만 조상 전체를 가져오는 기능이 없음.
    console.log($('.child2').parents());
}

// 이후 형제 찾기
function findNext() {
    console.log(document.querySelector('.child2').nextElementSibling);
    console.log($('.child2').next());
}

// 이전 형제 찾기
function findPrev() {
    console.log(
        document.querySelector('.child2').previousElementSiblingElementSibling,
    );
    console.log($('.child2').prev());
}

// 자식 찾기
function findChildren() {
    console.log(document.querySelector('.parent').children);
    console.log($('.parent').children());
}

////////////////
//// class 조작하기
// class 추가하기
function addClass() {
    // document.querySelector('#hi').classList.add('fs-50');
    $('#hi').addClass('fs-50');
}

// class 삭제하기
function removeClass() {
    // document.querySelector('#hi').classList.remove('fs-50');
    $('#hi').removeClass('fs-50');
}

// class 유뮤 확인
function hasClass() {
    // console.log(document.querySelector('#hi').classList.contains('bg-pink'));
    console.log($('#hi').hasClass('bg-pink'));
}

// class 토글
function toggleClass() {
    // document.querySelector('#hi').classList.toggle('bg-pink');
    $('#hi').toggleClass('bg-pink');
}
