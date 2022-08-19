"use strict";
const index = () => {
    // elements
    const selectedUnit = document.getElementById("type");
    const amount = document.getElementById("amount");
    const submitButton = document.getElementById("submit");
    //   const units = <HTMLCollection>document.getElementsByClassName("unit");
    submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", (event) => {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        if (amount.value && selectedUnit.value) {
            console.log("hello");
        }
        else {
            alert("fill all inputs");
        }
    });
};
index();
