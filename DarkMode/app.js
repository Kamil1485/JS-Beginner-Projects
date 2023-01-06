const body = document.querySelector("body");
const toggle = document.querySelector("#degistir");
const sunIcon = document.querySelector(".degistir .bxs-sun");
const moonIcon = document.querySelector(".degistir .bx-moon");

toggle.addEventListener("change", () => {
    
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
console.log("ss");
});