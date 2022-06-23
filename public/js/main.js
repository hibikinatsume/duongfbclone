// Active main menu when click
function mainMenuClick(element) {
    const mainMenu = document.getElementsByClassName("main-menu");

    for (var i = 0; i < mainMenu.length; i++) {
        mainMenu[i].classList.remove('active')
    }

    const checkActive = element.classList.contains('active');

    if (!checkActive) {
        element.classList.add('active');
    }
    console.log(element);
}

// Active right menu when click
function rightMenuClick(element) {
    const rightMenu = document.getElementsByClassName("right-menu");

    for (var i = 0; i < rightMenu.length; i++) {
        rightMenu[i].classList.remove('active')
    }

    const checkActive = element.classList.contains('active');

    if (!checkActive) {
        element.classList.add('active');
    }
    console.log(element);
}


