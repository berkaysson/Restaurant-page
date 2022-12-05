function createMenu() {
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");

    menu.appendChild(createMenuItem("Caffè Americano", 
    "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.", 
    "CaffèAmericano"));

    menu.appendChild(createMenuItem("Veranda Blend", 
    "In Latin America, coffee farms are often run by families, with their own homes on the same​ land where their coffee grows. We’ve sipped coffee with these farmers for decades,​ sitting on their verandas, overlooking the lush beauty of the coffee trees rolling out in the​ distance. Most times it was a lightly roasted coffee like this one. It took us more than 80​ tries to get it right—mellow and flavorful with a nice softness.​",
     "VerandaBlend"));

    menu.appendChild(createMenuItem("Espresso",
     "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.", 
     "Espresso"));

    menu.appendChild(createMenuItem("Cappuccino",
    "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
    "Cappuccino"));

    menu.appendChild(createMenuItem("Flat White",
    "Smooth ristretto shots of espresso get the perfect amount of steamed whole milk to create a not-too-strong, not-too-creamy, just-right flavor.",
    "FlatWhite"));

    return menu;
}

function createMenuItem(name, description, image) {
    const menu_item = document.createElement("div");
    menu_item.setAttribute("class", "menu-item");

    const item_name = document.createElement("h3");
    item_name.textContent = name;

    const item_description = document.createElement("p");
    item_description.textContent = description;

    const item_img = document.createElement("img");
    item_img.setAttribute("src", `images/${image}.png`);
    item_img.setAttribute("alt", `${name}.png`);

    menu_item.appendChild(item_name);
    menu_item.appendChild(item_description);
    menu_item.appendChild(item_img);

    return menu_item;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu