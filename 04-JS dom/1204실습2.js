// DOM 실습 - Todolist 변경하기
const todo = document.querySelectorAll('ul > .todo');
const done = document.querySelectorAll('ul > .done');
// const todoStyle = document.querySelectorAll('.done > span');
// const doneStyle = document.querySelectorAll('.todo > span');

console.log(todo);
console.log(done);

todo.forEach((state) => {
    state.classList.toggle('todo');
    state.classList.toggle('done');
});
done.forEach((state) => {
    state.classList.toggle('todo');
    state.classList.toggle('done');
});
