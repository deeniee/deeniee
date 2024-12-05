// DOM 실습 - 아이스크림 베스트9

const section = document.querySelector('section');
const icecreams = [
    '민트 초콜릿 칩',
    '초코나무 숲',
    '베리베리 스트로베리',
    '31요거트',
    '쫀떡궁합',
    '뉴욕 치즈케이크',
    '아몬드 봉봉',
    '엄마는 외계인',
    '그린티',
];

for (let num = 0; num < icecreams.length; num++) {
    const img = document.createElement('img');
    img.classList.add('img-box');

    const topN = document.createElement('h3');
    topN.classList.add('text-center');

    const ics = document.createElement('div');
    ics.classList.add('text-center');

    const card = document.createElement('article');
    card.classList.add('article-box');

    // num에 따른 각 요소 업데이트
    const icImg = `./image/icecream${num + 1}.png`; // 이미지
    img.setAttribute('src', icImg);
    topN.innerText = `Top ${num + 1}`; // 순위
    ics.textContent = icecreams[num]; // 이름

    card.append(img, topN, ics);
    section.append(card);
}
