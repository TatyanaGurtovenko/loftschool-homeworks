/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

function random(min, max) {
  return Math.floor(min + Math.random() * max - min);
}

let drag;
let posX = 0;
let posY = 0;

document.addEventListener('mousemove', (e) => {
  if (drag) {
    drag.style.left = e.clientX - posX + 'px';
    drag.style.top = e.clientY - posY + 'px';
  }
});

export function createDiv() {
  const div = document.createElement('div');
  const minSize = 10;
  const maxSize = 150;
  const maxColor = 0xffffff;

  div.className = 'draggable-div';
  div.style.background = '#' + random(0, maxColor).toString(16);
  div.style.top = random(0, window.innerHeight) + 'px';
  div.style.left = random(0, window.innerWidth) + 'px';
  div.style.width = random(minSize, maxSize) + 'px';
  div.style.height = random(minSize, maxSize) + 'px';

  div.addEventListener('mousedown', (e) => {
    drag = div;
    posX = e.offsetX;
    posY = e.offsetY;
  });
  div.addEventListener('mouseup', () => {
    drag = false
  });

  return div;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
