const userBtn = document.querySelector('.user-profile-img');
const profileMenu = document.querySelector('.profile-menu');

userBtn.addEventListener('click', function() {
    profileMenu.classList.toggle('show-menu');
})