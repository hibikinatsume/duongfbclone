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
        rightMenu[i].classList.remove('active');
    }

    const checkActive = element.classList.contains('active');

    if (!checkActive) {
        element.classList.add('active');
    }
    console.log(element);
}

// Show more access content when click
function moreAccessContent(button) {
    const accessMore = document.getElementsByClassName("access-more");
    const btnLess = document.getElementById("btn-less");

    for (var i = 0; i < accessMore.length; i++) {
        accessMore[i].classList.add('active');
    }

    btnLess.style.display = 'flex';
    button.style.display = 'none';
}

// Hide less access content when click
function lessAccessContent(button) {
    const accessMore = document.getElementsByClassName("access-more");
    const btnMore = document.getElementById("btn-more");

    for (var i = 0; i < accessMore.length; i++) {
        accessMore[i].classList.remove('active');
    }

    btnMore.style.display = 'flex';
    button.style.display = 'none';
}

// Hover show edit button
function showEditButton() {
    const btnEdit = document.getElementById("btn-edit");
    btnEdit.style.display = 'block';
}

// Hide edit button when not hover
function hideEditButton() {
    const btnEdit = document.getElementById("btn-edit");
    btnEdit.style.display = 'none';
}
