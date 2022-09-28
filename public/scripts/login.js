document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.querySelector("#password");
    const togglePasswordCheckbox = document.querySelector("#toggle-password");

    togglePasswordCheckbox.addEventListener("change", (event) => {
        passwordInput.type = event.target.checked ? "text" : "password"; 
    });
});