// TODO: practice14_설명.png 이미지의 조건을 만족하는 js 코드 작성
// writeNote() 함수를 미리 정의해두었습니다.

const writer = document.querySelector('#writer');
const content = document.querySelector('#content');
const btn = document.querySelector('button');
const table = document.querySelector('#table');

function writeNote() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const date = `${year}-${month}-${day} ${hour}:${minute}`;

    const row = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    table.append(row);
    row.append(td1, td2, td3);

    td1.innerText = writer.value;
    td2.innerText = content.value;
    td3.innerText = date;
}
