// 要素の取得
const hamburger = document.querySelector('.js-hamburger');
const nav = document.querySelector('.js-nav');
const navLinks = document.querySelectorAll('.header__link');

// ハンバーガーボタンがクリックされた時の処理
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});