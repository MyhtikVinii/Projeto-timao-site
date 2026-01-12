document.addEventListener("DOMContentLoaded", () => {
    let lastScrollTop = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
            // descendo
            header.classList.add("header-hide");
        } else {
            // subindo
            header.classList.remove("header-hide");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            // voltou ao topo
            header.classList.remove("header2");
        } else {
            // rolou a página
            header.classList.add("header2");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#margintopbtns");
    const logo = document.querySelector("#logo")

    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            // voltou ao topo
            header.classList.remove("btnsnavpart2");
            header.classList.add("btnsnav");
           logo.setAttribute("src", "Imagens/MythikBranco.png")
        
        } else {
            // rolou a página
            header.classList.add("btnsnavpart2");
            header.classList.remove("btnsnav");
             logo.setAttribute("src", "Imagens/Prancheta 1.png")
        }
    });
});
function darkmode(){
    let body = document.querySelector("body")
    let dark = document.getElementById("dark")
    let light = document.getElementById("light")
    let header = document.getElementsByClassName("header")
    
    
    body.style.backgroundColor = "#262626"
    dark.style.display = "none"
    light.style.display = "block"
    header.style.backgroundColor = "#262626"
}
function lightmode(){
    let body = document.querySelector("body")
    let dark = document.getElementById("dark")
    let light = document.getElementById("light")
    body.style.backgroundColor = "#F7F7F9"
    dark.style.display = "block"
    light.style.display = "none"
}



