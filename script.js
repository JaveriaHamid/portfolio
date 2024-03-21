const modeToggle = document.querySelector(".mode > span");

//   toggle for mode
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    modeToggle.innerHTML = modeToggle.innerHTML === 'light_mode' ? 'dark_mode' : 'light_mode';
});


//   toggle for sidebar nav
function toggleNav() {
    var nav = document.querySelector('.nav-right');
    nav.classList.toggle('show');

    // For Cross
    var toggle = document.querySelector('.nav-toggle');
    toggle.classList.toggle('open');
}

