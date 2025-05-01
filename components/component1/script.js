function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const status = document.getElementById("login-status");

    // Sahte doğrulama örneği
    if (username === "admin" && password === "1234") {
        status.style.color = "green";
        status.innerText = "Login successful!";
    } else {
        status.style.color = "red";
        status.innerText = "Invalid credentials. Please try again.";
    }
}
