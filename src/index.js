import loadHome from "./home";
import loadMenu from "./menu";

function createHeader() {
    const header = document.createElement("header");
    
    const title_header = document.createElement("h1");
    title_header.textContent = "Restaurant Page";

    header.appendChild(title_header);
    header.appendChild(createNavMenu());
    
    return header;
}

function createNavMenu() {
    const nav_menu = document.createElement("nav");

    const home_button = document.createElement("a");
    home_button.textContent = "Home";

    const menu_button = document.createElement("a");
    menu_button.textContent = "Menu";

    const contact_button = document.createElement("a");
    contact_button.textContent = "Contact";

    home_button.setAttribute("class", "page-link active");
    menu_button.setAttribute("class", "page-link");
    contact_button.setAttribute("class", "page-link");

    home_button.setAttribute("id", "Home");
    menu_button.setAttribute("id", "Menu");
    contact_button.setAttribute("id", "Contact");

    nav_menu.appendChild(home_button);
    nav_menu.appendChild(menu_button);
    nav_menu.appendChild(contact_button);
    
    return nav_menu
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

// function createFooter() {
//     // add footer later
//     // return footer;
// };

function activePage(link_ID) {
    const page_links = document.querySelectorAll(".page-link");
    page_links.forEach((link) => {
        if (link_ID != link.id) {
            link.classList.remove("active");
        }
        else if (link_ID == link.id) {
            link.classList.add("class", "active");
            if (link_ID == "Home") {
                loadHome();
            }

            else if (link_ID == "Menu") {
                loadMenu();
            }

            else {
                loadContact();
            }
        }
    })
}

function initWebsite(){
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    // content.appendChild(createFooter());

    document.querySelectorAll(".page-link").forEach((link) => {
        link.addEventListener("click",(e) => {
            if(e.target.classList.contains("active")) return;
            activePage(e.target.textContent)
        });
    });

    loadHome();

}


initWebsite()