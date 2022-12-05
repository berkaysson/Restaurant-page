function createContact() {
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 123 456 789'

    const address = document.createElement('p')
    address.textContent = '🏠 38 Park Row, New York, NY 10038'

    contact.appendChild(phoneNumber)
    contact.appendChild(address)

    return contact
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact