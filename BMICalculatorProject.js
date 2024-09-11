let inputWeightElem = document.getElementById("weight")
let inputHeightElem = document.getElementById("height")
let inputResultElem = document.getElementById("result")
let inputCategoryElem = document.getElementById("category")
let inputWeightSpanElem = document.getElementById("weight-val")
let inputHeightSpanElem = document.getElementById("height-val")

function calculate() {
    let result = inputWeightElem.value/(Math.pow(inputHeightElem.value/100,2))
    inputResultElem.innerHTML = result.toFixed(1)
if (result < 18.5) {
    inputResultElem.style.color = "#E8D60B";  // رنگ زرد
    inputCategoryElem.textContent = "Under Weight";
} else if (result >= 18.5 && result <= 24.9) {
    inputResultElem.style.color = "green";
    inputCategoryElem.textContent = "Normal weight";
} else if (result >= 25 && result <= 29.9) {
    inputResultElem.style.color = "orange";
    inputCategoryElem.textContent = "Over Weight";
} else if (result >= 30) {
    inputResultElem.style.color = "red";
    inputCategoryElem.textContent = "Obese";
}}

inputWeightElem.addEventListener("input",function () {
    inputWeightSpanElem.textContent = inputWeightElem.value + " kg"
})

inputHeightElem.addEventListener("input",function () {
    inputHeightSpanElem.textContent = inputHeightElem.value + " cm"
})