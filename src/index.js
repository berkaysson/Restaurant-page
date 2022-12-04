import loadHome from "./home";

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

function createFooter() {
    // add footer later
    // return footer;
};

function initWebsite(){
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    // content.appendChild(createFooter());

    loadHome();
}


initWebsite()