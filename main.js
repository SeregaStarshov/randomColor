const btn = document.querySelector('.btn-color');
const numberColor = document.querySelector('.number-color')
const wrap = document.querySelector('.wrap');

function getRandomColor() {
    let num1 = Math.floor(Math.random() * 256),
        num2 = Math.floor(Math.random() * 256),
        num3 = Math.floor(Math.random() * 256);
    numberColor.textContent = `#${num1.toString(16)}${num2.toString(16)}${num3.toString(16)}`;
    wrap.style.background = `#${num1.toString(16)}${num2.toString(16)}${num3.toString(16)}`;
}

btn.addEventListener('click', getRandomColor);