const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

const loadMore = document.querySelector('#loadMore');

loadMore.addEventListener('click', () => {
    alert('Login To view more contents');
});