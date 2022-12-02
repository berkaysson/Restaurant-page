function createHome() {
    const home = document.createElement("div");
    home.setAttribute("id", "home");

    const hero_container = document.createElement("div");

    const hero = document.createElement("h2");
    hero.textContent = "Coffee for Life";

    const hero_sl = document.createElement("h3");
    hero_sl.textContent = "Best Coffee";

    const order_button = document.createElement("button");
    order_button.textContent = "Order Now";
    
    hero_container.appendChild(hero);
    hero_container.appendChild(hero_sl);
    hero_container.appendChild(order_button);

    const info_container = document.createElement("div");

    const adress_container = document.createElement("div");

    const adress_icon = document.createElement("i");
    adress_icon.setAttribute("class", "fa-solid fa-location-dot"); 
    
    const adress = document.createElement("p");
    adress.textContent = "38 Park Row, New York, NY 10038";

    adress_container.appendChild(adress_icon);
    adress_container.appendChild(adress);

    const time_container = document.createElement("div");

    const time_icon = document.createElement("i");
    time_icon.setAttribute("class", "fa-solid fa-clock"); 
    
    const time = document.createElement("p");
    time.textContent = "Mon-Thurs:8am-8pm / Fri-Sun:8am-11pm";

    time_container.appendChild(time_icon);
    time_container.appendChild(time);

    info_container.appendChild(adress_container);
    info_container.appendChild(time_container);

    home.appendChild(hero_container);
    home.appendChild(info_container);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;