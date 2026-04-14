// Jordan Boykin
"use strict";
//This function is used to retrieve item information when an image is clicked. It will be used later.
const getData = src => {
    let selected = [];
    if (src == "images/biscotti.jpg")
        selected = [1.95, "Biscotti"];
    else if (src == "images/cappuccino.jpg")
        selected = [3.45, "Cappuccino"];
    else if (src == "images/coffee.jpg")
        selected = [1.75, "Coffee"];
    else if (src == "images/espresso.jpg")
        selected = [1.95, "Espresso"];
    else if (src == "images/latte.jpg")
        selected = [2.95, "Latte"];
    else if (src == "images/scone.jpg")
        selected = [2.95, "Scone"];
    return selected;
}

let total = 0;

const menuImages = document.querySelectorAll("ul img");

menuImages.forEach(img => {
    const srcAttr = img.getAttribute("src");
    const idAttr = img.getAttribute("id");

    img.addEventListener("mouseover", () => {
        img.setAttribute("src", idAttr);
    });

    img.addEventListener("mouseout", () => {
        img.setAttribute("src", srcAttr);
    });

    img.addEventListener("click", () => {
        const itemData = getData(srcAttr);

        total += itemData[0];

        const orderSelect = document.querySelector("select");
        const newOption = document.createElement("option");
        newOption.textContent = "$" + itemData[0].toFixed(2) + " \u2013 " + itemData[1];
        orderSelect.appendChild(newOption);

        document.querySelector("#total").textContent = "$" + total.toFixed(2);
    });
}); 

const firstNameInput = document.querySelector("input[name='first']");
firstNameInput.addEventListener("focus", () => {
    firstNameInput.style.backgroundColor = "#CFF8F8";
});
firstNameInput.addEventListener("blur", () => {
    firstNameInput.style.backgroundColor = "white";
});

const placeOrderBtn = document.querySelector("#place_order");
placeOrderBtn.addEventListener("click", () => {
    const orderSelect = document.querySelector("select");

    if (orderSelect.options.length === 0) {
        alert("Please add at least one item to your order.");
    } else {
        document.querySelector("form").submit();
    }
});

const clearOrderBtn = document.querySelector("#clear_order");
clearOrderBtn.addEventListener("click", () => {
    total = 0;
    document.querySelector("select").innerHTML = "";
    document.querySelector("#total").textContent = "";
});
