// Jordan Boykin
"use strict";
let params = new URLSearchParams(window.location.search);
let firstName = params.get("first");
document.querySelector("span").textContent = firstName;
