const menu = document.querySelector('#menu');
const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const s1 = document.querySelector('#s1');
const sn1 = document.querySelector('#sn1');
const sc1 = document.querySelector('#sc1');
const s2 = document.querySelector('#s2');
const sn2 = document.querySelector('#sn2');
const sc2 = document.querySelector('#sc2');
const s3 = document.querySelector('#s3');
const sn3 = document.querySelector('#sn3');
const sc3 = document.querySelector('#sc3');

openMenu.addEventListener('click', () => {
    openMenu.classList.add('hidden');
    closeMenu.classList.remove('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('bg-mobile');
});

closeMenu.addEventListener('click', () => {
    openMenu.classList.remove('hidden');
    closeMenu.classList.add('hidden');
    menu.classList.add('hidden');
    menu.classList.remove('bg-mobile');
});

s1.addEventListener('click', () => {
    s1.classList.add('opacity-50');
    s1.classList.add('stand');
    s2.classList.remove('stand');
    s3.classList.remove('stand');
    s2.classList.remove('opacity-50');
    s3.classList.remove('opacity-50');
    sc1.classList.add('md:w-100-30');
    sc1.classList.remove('md:w-100-85');
    sn1.classList.add('md:text-12xl');
    sn1.classList.remove('md:text-5xl');
    sn1.classList.add('text-8xl');
    sc2.classList.remove('md:w-100-30');
    sc2.classList.add('md:w-100-85');
    sn2.classList.remove('md:text-12xl');
    sn2.classList.add('md:text-5xl');
    sn2.classList.remove('text-8xl');
    sc3.classList.remove('md:w-100-30');
    sc3.classList.add('md:w-100-85');
    sn3.classList.remove('md:text-12xl');
    sn3.classList.add('md:text-5xl');
});

s2.addEventListener('click', () => {
    s2.classList.add('opacity-50');
    s2.classList.add('stand');
    s1.classList.remove('stand');
    s3.classList.remove('stand');
    s1.classList.remove('opacity-50');
    s3.classList.remove('opacity-50');
    sc1.classList.remove('md:w-100-30');
    sc1.classList.add('md:w-100-85');
    sn1.classList.remove('md:text-12xl');
    sn1.classList.add('md:text-5xl');
    sn1.classList.remove('text-8xl');
    sc2.classList.remove('md:w-100-85');
    sc2.classList.add('md:w-100-30');
    sn2.classList.add('md:text-12xl');
    sn2.classList.remove('md:text-5xl');
    sn2.classList.add('text-8xl');
    sc3.classList.remove('md:w-100-30');
    sc3.classList.add('md:w-100-85');
    sn3.classList.remove('md:text-12xl');
    sn3.classList.add('md:text-5xl');
    sn3.classList.remove('text-8xl');
});

s3.addEventListener('click', () => {
    s3.classList.add('opacity-50');
    s3.classList.add('stand');
    s2.classList.remove('stand');
    s1.classList.remove('stand');
    s2.classList.remove('opacity-50');
    s1.classList.remove('opacity-50');
    sc1.classList.remove('md:w-100-30');
    sc1.classList.add('md:w-100-85');
    sn1.classList.remove('md:text-12xl');
    sn1.classList.add('md:text-5xl');
    sn1.classList.remove('text-8xl');
    sc2.classList.remove('md:w-100-30');
    sc2.classList.add('md:w-100-85');
    sn2.classList.remove('md:text-12xl');
    sn2.classList.add('md:text-5xl');
    sn2.classList.remove('text-8xl');
    sc3.classList.remove('md:w-100-85');
    sc3.classList.add('md:w-100-30');
    sn3.classList.add('md:text-12xl');
    sn3.classList.add('text-8xl');
    sn2.classList.remove('md:text-5xl');
});