const newId = document.getElementById('userid');
const newCmt = document.getElementById('comment');
const cmtList = document.querySelector('.comment-list');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (newId !== '' && newCmt !== '') {
        const cmtAdd = document.createElement('li');
        cmtList.append(cmtAdd);
        cmtAdd.innerHTML = `<b>${newId.value}</b> - ${newCmt.value}`;
    } else {
    }
    newId.value = '';
    newCmt.value = '';
});
