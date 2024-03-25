function getTitleName() {
    var toc = document.getElementsByClassName("toc");
    var navbarContainer = document.getElementById("navbar_container");

    for (i=0; i<toc.length; i++) {
        var tag = toc[i].tagName;
        var text = toc[i].innerHTML;
        toc[i].id = text.replace(" ", "_");
        var node = document.createTextNode(text);
        var para = document.createElement("a");
        para.appendChild(node);
        para.setAttribute("href", ['#', toc[i].id].join(''));

        if (tag == "H1") {
            para.className = "toc_h1";
        }
        else if (tag == "H2") {
            para.className = "toc_h2";
        }
        else {
            para.className = "toc_h3";
        }
        navbarContainer.appendChild(para);
    }
}
function copyEmail() {
    var email = document.getElementById("email");
    navigator.clipboard.writeText("normi263042@gmail.com");
    email.classList.add("email");
    setTimeout(() => {email.classList.remove("email");}, 3000)
}