const bebe = document.querySelector('#bebe');
const showChat = document.querySelector('#chatbox');
const userName = document.querySelector('#userName');
const chatSection = document.querySelector('#chatSection');
const chatbox = document.querySelector('#chatbox');
const backToChatSection = document.querySelector('#backToChatSection');
const noChatSelected = document.querySelector('#noChatSelected');
const menuIcon = document.querySelector('#menuIcon');
const menuIconDisplay = document.querySelector('#menuIconDisplay');
const closeMenuIconDisplay = document.querySelector('#closeMenuIconDisplay');
const chatMenuIcon = document.querySelector('#chatMenuIcon');
const chatHeaderIconDisplay = document.querySelector('#chatHeaderIconDisplay');
const closeChatHeaderIconDisplay = document.querySelector('#closeChatHeaderIconDisplay');
const showMore = document.querySelector('#showMore');
const showMoreDisplay = document.querySelector('#showMoreDisplay');
const closeShowMoreDisplay = document.querySelector('#closeShowMoreDisplay');
const paperclip = document.querySelector('#paperclip');
const paperclipMenu = document.querySelector('#paperclipMenu');
const userProfile = document.querySelector('#userProfile');
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

bebe.addEventListener('click', () => {
    // on small screens
   if (w <= 768) {
    chatSection.classList.add('hidden');
    showChat.classList.remove('hidden');
    menuIconDisplay.classList.add('hidden');
    chatHeaderIconDisplay.classList.add('hidden');
    showMoreDisplay.classList.add('hidden');
    paperclipMenu.classList.add('hidden');
    userProfile.classList.remove('md:block');
   };

    // beyond small screen    
   if (w >= 768) {
    chatbox.classList.add('md:block');
    noChatSelected.classList.add('hidden');
    menuIconDisplay.classList.add('hidden');
    chatHeaderIconDisplay.classList.add('hidden');
    showMoreDisplay.classList.add('hidden');
    paperclipMenu.classList.add('hidden');
    userProfile.classList.remove('md:block');
   };
});

backToChatSection.addEventListener('click', () => {
    if (w <= 768) {
        chatSection.classList.remove('hidden');
        chatbox.classList.add('hidden');
        menuIconDisplay.classList.add('hidden');
        paperclipMenu.classList.add('hidden');
        chatHeaderIconDisplay.classList.add('hidden');
        userProfile.classList.remove('md:block');
    };
    
    if (w >= 768) {
        chatbox.classList.remove('md:block');
        noChatSelected.classList.remove('hidden');
        menuIconDisplay.classList.add('hidden');
        paperclipMenu.classList.add('hidden');
        chatHeaderIconDisplay.classList.add('hidden');
        userProfile.classList.remove('md:block');
    };
});

menuIcon.addEventListener('click', () => {
    chatHeaderIconDisplay.classList.add('hidden');
    paperclipMenu.classList.add('hidden');
    menuIconDisplay.classList.remove('hidden');
});

closeMenuIconDisplay.addEventListener('click', () => {
    menuIconDisplay.classList.add('hidden');
});

chatMenuIcon.addEventListener('click', () => {
    menuIconDisplay.classList.add('hidden');
    paperclipMenu.classList.add('hidden');
    chatHeaderIconDisplay.classList.remove('hidden');
});

closeChatHeaderIconDisplay.addEventListener('click', () => {
    chatHeaderIconDisplay.classList.add('hidden');
});

showMore.addEventListener('click', () => {
    chatHeaderIconDisplay.classList.add('hidden');
    showMoreDisplay.classList.remove('hidden');
});

closeShowMoreDisplay.addEventListener('click', () => {
    chatHeaderIconDisplay.classList.add('hidden');
    showMoreDisplay.classList.add('hidden');
});

paperclip.addEventListener('click', () => {
    menuIconDisplay.classList.add('hidden');
    chatHeaderIconDisplay.classList.add('hidden');
    showMoreDisplay.classList.add('hidden');

    if (paperclipMenu.classList.contains('hidden')) {
        paperclipMenu.classList.remove('hidden');
    } else {
        paperclipMenu.classList.add('hidden');
    };
});




function cantAccess() {
    alert('Sorry, we can not access this feature. Make sure to allow permission in the settings.');
};
