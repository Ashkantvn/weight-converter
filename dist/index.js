"use strict";
const reducer = (unitsCalculator, selectedUnitValue, amountValue) => {
    let siUnit = 0;
    switch (selectedUnitValue) {
        case "Kilogram":
            siUnit = amountValue;
            break;
        case "Milligram":
            siUnit = amountValue / 1000000;
            break;
        case "Gram":
            siUnit = amountValue / 1000;
            break;
        case "Pound":
            siUnit = amountValue / 2.20462262;
            break;
        case "Ounce":
            siUnit = amountValue / 35.273962;
            break;
        default:
            console.log(amountValue);
            alert("ERROR");
    }
    unitsCalculator(siUnit);
};
const index = () => {
    // elements
    const selectedUnit = document.getElementById("type");
    const amount = document.getElementById("amount");
    const submitButton = document.getElementById("submit");
    const units = document.getElementsByClassName("unit");
    ////units calculator function
    const unitsCalculator = (siUnit) => {
        units[0].textContent = siUnit.toString();
        units[1].textContent = (siUnit * 1000).toString();
        units[2].textContent = (siUnit * 1000000).toString();
        units[3].textContent = (siUnit * 2.20462262).toString();
        units[4].textContent = (siUnit * 35.273962).toString();
    };
    ////onclick action
    submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", (event) => {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        if (amount.value && selectedUnit.value) {
            reducer(unitsCalculator, selectedUnit.value, parseInt(amount.value));
        }
        else {
            alert("fill all inputs");
        }
    });
};
index();
