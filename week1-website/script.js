console.log("script.js loaded");

// ---------------- LOGIN / DASHBOARD ----------------
function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === "" || password === "") {
        error.innerText = "All fields are required.";
        return false;
    }

    if (username === "admin" && password === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
        return false;
    } else {
        error.innerText = "Invalid username or password.";
        return false;
    }
}

function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// Auto-check dashboard page
if (window.location.pathname.includes("dashboard")) {
    checkLogin();
}

// ---------------- CLOCK ----------------
function updateClock() {
    const now = new Date();
    const clockEl = document.getElementById("clock");
    if (clockEl) {
        clockEl.innerText = now.toLocaleTimeString();
    }
}
setInterval(updateClock, 1000);
updateClock();

// ---------------- CALCULATOR ----------------
function calculate() {
    const num1El = document.getElementById("num1");
    const num2El = document.getElementById("num2");
    const resultEl = document.getElementById("result");

    if (!num1El || !num2El || !resultEl) return;

    const n1 = parseFloat(num1El.value);
    const n2 = parseFloat(num2El.value);

    if (isNaN(n1) || isNaN(n2)) {
        resultEl.innerText = "Please enter valid numbers";
        return;
    }

    resultEl.innerText = "Result: " + (n1 + n2);
}

// ---------------- TOGGLE BUTTON ----------------
const toggleBtn = document.getElementById("toggleBtn");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        toggleBtn.innerText = toggleBtn.innerText === "OFF" ? "ON" : "OFF";
    });
}

// ---------------- CONTACT FORM ----------------
function submitContact() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const msg = document.getElementById("msg");

    if (name === "" || email === "" || message === "") {
        msg.innerText = "All fields are required.";
        return false;
    }

    msg.style.color = "green";
    msg.innerText = "Message sent successfully!";

    return false; // prevent page refresh
}
