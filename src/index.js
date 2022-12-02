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

    const home_button = document.createElement("button");
    home_button.textContent = "Home";

    const about_button = document.createElement("button");
    about_button.textContent = "About";

    const contact_button = document.createElement("button");
    contact_button.textContent = "Contact";

    nav_menu.appendChild(home_button);
    nav_menu.appendChild(about_button);
    nav_menu.appendChild(contact_button);
    
    return nav_menu
}

function createMain() {
    const main = document.createElement("main");

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
}


initWebsite()