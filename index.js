"use strict";
// Create a "closeButtons" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "closeButtons";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a closeButtons button to hide the current list item
const closeButtons = document.getElementsByClassName("closeButtons");
for (i = 0; i < closeButtons.length; i++) {
    let closeButton = closeButtons[i];
    closeButton.addEventListener("click", () => {
        let li = closeButton.parentElement;
        if (!!li) {
            li.style.display = "none";
        }
    });
}
// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("ul");
if (list) {
    list.addEventListener("click", function (ev) {
        let target = ev.target;
        if (target) {
            if (target.tagName === "LI") {
                target.classList.toggle("checked");
            }
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    const input = (document.getElementById("myInput"));
    if (!input)
        return;
    let inputValue = input.value;
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === "") {
        alert("You must write something!");
    }
    else {
        let myUL = document.getElementById("myUL");
        if (myUL) {
            myUL.appendChild(li);
        }
    }
    input.value = "";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "closeButtons";
    span.appendChild(txt);
    li.appendChild(span);
    span.addEventListener("click", () => {
        const li = span.parentElement;
        if (!!li) {
            li.style.display = "none";
        }
    });
}
const addBtn = document.getElementById("addBtn");
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", newElement);
