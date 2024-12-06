const bg = document.querySelector('html'); // 문서 전체
// const btn = document.getElementsByTagName('button'); // 유사배열 (htmlCollection) 형태로 가져와서 인식이 안됨.

const btn = document.querySelector('.btn');
const rgb = document.querySelector('.rgb');

btn.addEventListener('click', function () {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    const color = `rgb(${randomR}, ${randomG}, ${randomB})`;
    rgb.innerHTML = color;
    bg.style.backgroundColor = color;
});
