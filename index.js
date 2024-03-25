function toggleBtn() {
    const toggleBtnIcon = document.getElementById("toggle_btn");
    const dropdownMenu = document.getElementById("RWD_dropdown_menu");

    dropdownMenu.classList.toggle('open');
    toggleBtnIcon.innerHTML = (dropdownMenu.classList.contains('open')) ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
}
document.onclick = function (e) {
    const toggleBtnIcon = document.getElementById("toggle_btn");
    const dropdownMenu = document.getElementById("RWD_dropdown_menu");
    if (e.target.className != 'fa-solid fa-bars') {
        dropdownMenu.classList.remove('open');
        toggleBtnIcon.innerHTML = '<i class="fa-solid fa-bars" id="toggle_btn_icon"></i>';
    }
    
}

function copyEmail() {
    var email = document.getElementById("email");
    navigator.clipboard.writeText("normi263042@gmail.com");
    email.classList.add("email");
    setTimeout(() => {email.classList.remove("email");}, 3000)
}
